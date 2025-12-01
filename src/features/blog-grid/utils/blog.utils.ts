export const getBlogPostGradient = (index: number): string => {
  const gradients = [
    "from-blue-900 to-blue-700",
    "from-cyan-100 to-blue-200",
    "from-red-600 to-orange-600",
    "from-purple-600 to-indigo-700",
    "from-yellow-400 to-orange-500",
    "from-green-600 to-emerald-700",
  ];
  return gradients[index] || gradients[0];
};

export const getBlogPostHoverColor = (index: number): string => {
  const hoverColors = [
    "group-hover:text-blue-300",
    "group-hover:text-cyan-300",
    "group-hover:text-red-300",
    "group-hover:text-purple-300",
    "group-hover:text-yellow-300",
    "group-hover:text-green-300",
  ];
  return hoverColors[index] || hoverColors[0];
};
