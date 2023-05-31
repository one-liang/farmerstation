const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/**/*.pug",
    "./src/**/*.js",
  ],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      fontFamily: {
        notoSansTC: ["Inter", "NotoSansTC", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        "primary": "#87BE23",
        "primary-dark": "#6C9C30",
        "primary-lighten": "#E2EFCB",
        "secondary-dark": "#F39313",
        "secondary-light": "#FAB900",
        "error-dark": "#FF0000",
        "error-light": "#FEF0F0",
        "gray-900": "#2A2220",
        "gray-800": "#3F3D3C",
        "gray-600": "#696969",
        "gray-500": "#838383",
        "gray-400": "#9E9EA4",
        "gray-200": "#D9D9D9",
        "gray-100": "#F0F0F0",
        "gray-50 ": "#F9F9F9",
        "gradient-left ": "#86BC25",
        "gradient-middle ": "#CAF57B",
        "gradient-right ": "#C9F974",
      },
      backgroundColor: {
        "primary": "#87BE23",
        "primary-dark": "#6C9C30",
        "primary-lighten": "#E2EFCB",
        "secondary-dark": "#F39313",
        "secondary-light": "#FAB900",
        "error-dark": "#FF0000",
        "error-light": "#FEF0F0",
        "gray-900": "#2A2220",
        "gray-800": "#3F3D3C",
        "gray-600": "#696969",
        "gray-500": "#838383",
        "gray-400": "#9E9EA4",
        "gray-200": "#D9D9D9",
        "gray-100": "#F0F0F0",
        "gray-50 ": "#F9F9F9",
        "gradient-left ": "#86BC25",
        "gradient-middle ": "#CAF57B",
        "gradient-right ": "#C9F974",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
