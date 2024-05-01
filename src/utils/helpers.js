function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const tailwindBgColor = () => {
  // Note: We need FULL className for tailwind css

  const colors = [
    // Light 200 background
    "bg-red-200",
    "bg-orange-200",
    "bg-amber-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-emerald-200",
    "bg-teal-200",
    "bg-cyan-200",
    "bg-sky-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-violet-200",
    "bg-purple-200",
    "bg-fuchsia-200",
    "bg-pink-200",
    "bg-rose-200",
    // Light background
    "bg-red-400",
    "bg-orange-400",
    "bg-amber-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-emerald-400",
    "bg-teal-400",
    "bg-cyan-400",
    "bg-sky-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-violet-400",
    "bg-purple-400",
    "bg-fuchsia-400",
    "bg-pink-400",
    "bg-rose-400",
    // Medium background
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
    // Dark Background
    "bg-red-700",
    "bg-orange-700",
    "bg-amber-700",
    "bg-yellow-700",
    "bg-green-700",
    "bg-emerald-700",
    "bg-teal-700",
    "bg-cyan-700",
    "bg-sky-700",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-violet-700",
    "bg-purple-700",
    "bg-fuchsia-700",
    "bg-pink-700",
    "bg-rose-700",
    // Darkest background
    "bg-red-900",
    "bg-orange-900",
    "bg-amber-900",
    "bg-yellow-900",
    "bg-green-900",
    "bg-emerald-900",
    "bg-teal-900",
    "bg-cyan-900",
    "bg-sky-900",
    "bg-blue-900",
    "bg-indigo-900",
    "bg-violet-900",
    "bg-purple-900",
    "bg-fuchsia-900",
    "bg-pink-900",
    "bg-rose-900",
  ];

  return colors[getRandomInt(colors.length)];
};
