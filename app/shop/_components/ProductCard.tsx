import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import CartButton from "./CartButton";
import ProductCardImage from "./ProductCardImage";

export const ProductCard = ({ data }: { data: Product }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <ProductCardImage
        productId={data.id}
        imgUrl={data.imageUrl || "/placeholder.png"}
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h6 className="text-xs text-emerald-600 font-medium mb-1 uppercase tracking-wide">
          {data.name}
        </h6>

        <h4 className="font-semibold text-lg line-clamp-1 mb-1">{data.name}</h4>

        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {data.description || "No description available."}
        </p>

        <div className="flex justify-between items-center mt-auto">
          {/* Price */}
          <span className="font-bold text-lg text-emerald-700">
            ${data.price.toFixed(2)}
          </span>

          {/* Stock */}
          <span
            className={`text-sm font-medium ${
              data.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.stock > 0 ? `${data.stock} in stock` : "Out of stock"}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <Button
            disabled={data.stock === 0}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Buy Now
          </Button>
          <CartButton product={data} />
        </div>
      </div>
    </div>
  );
};
