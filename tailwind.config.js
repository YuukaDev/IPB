module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        visina: "150vh"
      },
      backgroundColor: {
        navigationBackground: "#0D0E0D"
      },
      colors: {
        navigationColor: "rgb(27, 19, 60)",
        heroColor: "rgb(255, 255, 255)"
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