import React from "react";

const ProductCard = ({ item }) => {
  return (
    <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
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
        <span class="font-normal text-gray-600 dark:text-gray-300">
          {item.category.toUpperCase()}
        </span>
        <span class="font-semibold text-gray-800 dark:text-gray-50">${item.price.toFixed(2)}</span>
      </div>

      <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
        <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
          <span class="text-base">Add to Cart</span>
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
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
