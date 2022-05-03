module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        visina: "5vh"
      },
      backgroundColor: {
        navigationBackground: "#0D0E0D",
        featuredColor: "rgb(209 213 219)"
      },
      colors: {
        navigationColor: "rgb(68, 68, 68)",
        heroColor: "rgb(255, 255, 255)",
        gradientColor: "#00a4bd",
        gradientColor2: "#00bda5"
      },
      fontSize: {
        navigationlink: "1em"
      },
      letterSpacing: {
        heroWide: "3px"
      }
    },
  },
  plugins: [],
}