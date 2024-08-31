import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      address: Yup.string().required('Address is required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number must be digits only')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required'),
    }),
    onSubmit: (values) => {
      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        total: cartItems.reduce((acc, item) => acc + item.price, 0),
        items: cartItems,
        ...values,
      };

      const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem('orders', JSON.stringify([...storedOrders, newOrder]));

      clearCart();
      navigate('/orders');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border p-2 rounded w-full"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border p-2 rounded w-full"
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="text-red-500">{formik.errors.address}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border p-2 rounded w-full"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-red-500">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Submit Order
      </button>
    </form>
  );
};

export default CheckoutForm;
