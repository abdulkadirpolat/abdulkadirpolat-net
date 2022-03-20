module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bej: "#f7f7f7",
        "gray-1": "#939393",
        "gray-2": "#828282",
        "gray-3": "#6f6f6f",
        "gray-9": "#232323",
        "red-1": "#6e3131",
        "dark-purple": "#461780",
        "light-purple": "#4d1284",
        "rich-black": "#11151C",
        "space-cadet": "#240358",
        gunmetal: "#10002B",
      },
    },
  },
  plugins: [],
};
