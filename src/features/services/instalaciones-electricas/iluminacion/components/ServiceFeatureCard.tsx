"use client";

import { Check } from "lucide-react";

interface ServiceFeatureCardProps {
  title: string;
  items: string[];
}

export function ServiceFeatureCard({ title, items }: ServiceFeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full">
      <h3 className="text-xl font-semibold text-[#006989] mb-4 border-b-2 border-[#01A7C2] pb-2">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-[#01A7C2] mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
