"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CATEGORIES } from "../constants/categories.constants";
import { useCategoryToggle } from "../hooks/useCategoryToggle";

export const Categories = () => {
  const { activeCategory, handleCategoryClick } = useCategoryToggle();

  return (
    <section className="bg-[#e6e6e6]">
      <div className="mx-auto max-w-[1280px]">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <div key={category.id} className="relative">
                <div
                  className={`flex flex-col items-center text-center cursor-pointer p-4 h-40 transition-colors ${
                    isActive ? "bg-[#ccc]" : "hover:bg-[#ccc]"
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 mb-2">
                    {category.title}
                  </span>
                  {isActive ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Dropdown Content */}
      {activeCategory && (
        <div className="bg-[#ccc] py-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CATEGORIES.find(
                (cat) => cat.id === activeCategory
              )?.subcategories.map((subcategory, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {subcategory.title}
                  </h3>
                  <ul className="space-y-2">
                    {subcategory.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#d09706] transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
