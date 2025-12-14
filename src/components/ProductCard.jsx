import React from "react";

const ProductCard = ({ item, addOrRemoveFromCart, inCart }) => {
  return (
    <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 hover:shadow-2xl hover:translate-3d transition-all duration-300">
      <div className="bg-amber-100 p-8">
        <img
          class="object-contain h-45 w-full"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div class="flex flex-col gap-1 mt-4 px-4">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50 truncate">
          {item.title}
        </h2>
        <span class="font-normal text-gray-600 dark:text-gray-300 line-clamp-2">
          {item.description}
        </span>
        <span class="font-semibold text-gray-800 dark:text-gray-50">
          ${item.price.toFixed(2)}
        </span>
      </div>

      <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
        <button
          class={`w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50 ${
            inCart ? "text-red-500" : "text-gray-800"
          }`}
          onClick={() => addOrRemoveFromCart({ ...item })}
        >
          <span class="text-base">{inCart ? "Remove" : "Add"}</span>
          {inCart ? (
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 12h12"
              />
            </svg>
            
          ) : (
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
