import React from "react";
import { FcInTransit } from "react-icons/fc";

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="mt-16 min-h-screen p-4">
      <h1 className="text-xl font-semibold mb-6 inline-flex gap-2 items-center mt-5">
        <FcInTransit className="text-2xl" /> Your Cart{" "}
      </h1>
      {cart.length === 0 ? (
        <div className="text-center py-16 bg-blue-100 shadow-md text-2xl italic rounded-3xl">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                class="border p-4 rounded-lg shadow-md md:flex md:gap-6"
              >
                <div className="flex justify-center align-center h-40 w-40 mb-4">
                  <img
                    class="object-contain h-full w-full"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="grid">
                  <h2 class="text-md font-semibold mb-2 truncate">
                    {item.title}
                  </h2>
                  <p class="text-gray-700 mb-2">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p class="text-gray-700">Quantity: {item.quantity}</p>
                  <div>
                    <button
                      class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      class="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-4 cursor-pointer border-black border-1 px-2 py-1 rounded-lg w-40 text-center"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 shadow rounded max-w-md mt-8">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Discount (10%)</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-t pt-3 mt-3 text-lg font-semibold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            {/* <button className="w-full bg-green-600 text-white mt-4 py-2 rounded">
              Checkout
            </button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
