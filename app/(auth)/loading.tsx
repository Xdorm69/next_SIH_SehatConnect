// app/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
        {/* Loading text */}
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
