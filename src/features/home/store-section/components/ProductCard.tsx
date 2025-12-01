import { ArrowRight } from "lucide-react";
import { Product } from "../types/product.types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div className="flex items-center text-[#d09706] text-sm font-medium">
        <span>Ver modelos disponibles</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};
