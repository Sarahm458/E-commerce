import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cartItems }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    payment: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    const order = {
      id: Date.now(), // Use a unique ID for the order
      date: new Date().toLocaleDateString(),
      total: cartItems.reduce((acc, item) => acc + item.price, 0),
      items: cartItems,
      ...values,
    };

    // Save order to local storage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cartItems');

    // Navigate to order history
    navigate('/orders');
  };

  return (
    <Formik
      initialValues={{ name: '', address: '', payment: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Field name="name" type="text" className="mt-1 block w-full border p-2 rounded" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <Field name="address" type="text" className="mt-1 block w-full border p-2 rounded" />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700">Payment</label>
            <Field name="payment" type="text" className="mt-1 block w-full border p-2 rounded" />
            <ErrorMessage name="payment" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded">
            Submit Order
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
