module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        landingHero: "80vh",
        categoryContainer: "45vh",
        categories: "45vh",
        highlight: "50vh",
        aboutContainer: "100vh",
        hero: "100%",
        productBox: "300px",
        imageBox: "300px",
        productHero: "120vh"
      },
      width: {
        highlight: "63%",
        footer: "355px",
        productBox: "400px",
        imageBox: "500px",
        video: "100%",
        visualImage: "32.5%",
        permalinkCard: "303px",
        table: "900px",
        buttonSummary: "56%"
      },
      backgroundColor: {
        navigationBackground: "#F2F3F4",
        featuredColor: "rgb(209 213 219)",
        productBox: "rgb(243, 243, 243)",
        productButton: "#d63d00"
      },
      colors: {
        navigationColor: "rgb(68, 68, 68)",
        heroColor: "rgb(255, 255, 255)",
        footer: "rgb(106, 106, 106)",
        logoGreen: "#34de01",
        lighterGreen: "#85ff60"
      },
      fontSize: {
        navigationlink: "1em",
        aboutUs: "1.2em",
        aboutParagraph: "1em",
        footerFont: "15px"
      },
      letterSpacing: {
        heroWide: "3px"
      },
      backgroundImage: {
        'hero-1': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/forza_5.jpg')",
        'hero-2': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/nba.jpg')",
        'hero-3': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/hollow.jpg')",
        'highlight-section': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/dead-cells.jpg')",
        'category-1': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pcmag.com/imagery/roundups/04rB8kbcrHGgvsWGkGWWS2m-3..v1637158780.jpg')",
        'category-2': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/originals/8e/45/ce/8e45ce477f3349ea31fba600dd8cd139.jpg')",
        'category-3': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.pcgamesn.com/wp-content/uploads/2020/06/TheWitcher3.jpg')",
        'category-4': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/whvfeupkgkp2dcdomnkv/resident-evil-2?fimg-ssr-default')",
        'category-5': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://imgix.kotaku.com.au/content/uploads/sites/3/2020/03/ori-will-wisps-review-impressions-1.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280')",
      },
      gridTemplateColumns: {
        'categories': 'repeat(3, 1fr)'
      },
      padding: {
        footer: "30px"
      },
      gap: {
        footer: "10px"
      }
    },
  },
  plugins: [],
}
