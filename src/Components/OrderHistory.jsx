import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data from local storage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="mb-4 p-4 border rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Order ID: {order.id}</h3>
            <p className="text-gray-600">Date: {order.date}</p>
            <p className="text-gray-600">Total: ${order.total.toFixed(2)}</p>
            <div className="mt-2">
              <h4 className="font-semibold">Items:</h4>
              {order.items.map(item => (
                <div key={item.id} className="flex items-center mb-2">
                  <img
                    src={item.images[0] || 'https://via.placeholder.com/50'}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2">
              <p className="font-semibold">Shipping Information:</p>
              <p>Name: {order.name}</p>
              <p>Address: {order.address}</p>
              <p>Payment Method: {order.payment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
