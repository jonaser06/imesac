"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  MessageCircle,
  Mail,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  brand: string;
}

interface ProductViewProps {
  product: any;
  relatedProducts: RelatedProduct[];
  comments: any[];
}

export default function ProductView({
  product,
  relatedProducts,
  comments,
}: ProductViewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(
      `Hola, me interesa cotizar el producto: ${product.name} (SKU: ${product.sku}). ¿Podrían enviarme más información y precios?`
    );
    window.open(`https://wa.me/51975431858?text=${message}`, "_blank");
  };

  const handleEmailQuote = () => {
    const subject = encodeURIComponent(`Cotización - ${product.name}`);
    const body = encodeURIComponent(
      `Estimados,\n\nMe interesa cotizar el siguiente producto:\n\nProducto: ${product.name}\nSKU: ${product.sku}\n\nPor favor, envíenme información detallada sobre precios, disponibilidad y condiciones de entrega.\n\nGracias.`
    );
    window.open(
      `mailto:ventas@geselec.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/tienda"
              className="hover:text-blue-600 transition-colors"
            >
              Tienda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                <Image
                  src={
                    product.images[activeImageIndex].url || "/placeholder.svg"
                  }
                  alt={product.images[activeImageIndex].alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImageIndex === index
                        ? "border-blue-500"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      width={150}
                      height={150}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.brand}
                </span>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-600">
                  SKU:{" "}
                  <span className="font-medium text-blue-600">
                    {product.sku}
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500 line-through">
                    S/ {product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  S/ {product.price.toFixed(2)}
                </div>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div>
                <a
                  href={product.technicalSheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Descargar Ficha Técnica</span>
                </a>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar por WhatsApp</span>
                </button>
                <button
                  onClick={handleEmailQuote}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Cotizar por Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Descripción Completa
              </button>
              <button
                onClick={() => setActiveTab("comments")}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "comments"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Comentarios ({comments.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div className="space-y-4">
                <div
                  className={`prose max-w-none text-gray-700 ${
                    !isDescriptionExpanded ? "line-clamp-6" : ""
                  } transition-all duration-300`}
                >
                  <div className="whitespace-pre-line">
                    {product.fullDescription}
                  </div>
                </div>
                <button
                  onClick={() =>
                    setIsDescriptionExpanded(!isDescriptionExpanded)
                  }
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  {isDescriptionExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Ver menos</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      <span>Ver más</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {activeTab === "comments" && (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {comment.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">
                            {comment.author}
                          </h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < comment.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-gray-700">{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Productos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {relatedProduct.brand}
                  </span>
                </div>
                <div className="px-3 pb-2">
                  <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="object-contain max-h-32"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 line-through">
                      S/ {relatedProduct.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      S/ {relatedProduct.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
