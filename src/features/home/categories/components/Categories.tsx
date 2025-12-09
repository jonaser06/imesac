"use client";
import Link from "next/link";
import { CATEGORIES } from "../constants/categories.constants";

export const Categories = () => {
  return (
    <section className="bg-[#e6e6e6]">
      <div className="mx-auto max-w-[1280px]">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map((category) => {
            const IconComponent = category.icon;

            return (
              <div key={category.id} className="relative">
                <Link
                  href={category.href}
                  className="flex flex-col items-center text-center cursor-pointer p-4 h-40 transition-colors hover:bg-[#ccc] group"
                >
                  <div className="mb-3 transition-transform group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-gray-700 group-hover:text-[#d09706] transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 mb-2">
                    {category.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};