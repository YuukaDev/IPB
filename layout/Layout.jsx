import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import Highlight from "../components/Highlight/Highlight";
import About from "../components/About/About";
import { Category } from "../components/Categories/Category";
import Footer from "../components/Footer/Footer";

export const Layout = ({ products }) => {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <FeaturedSection products={products} />
        <br />
        <br />
        <br />
        <Highlight />
        <About />
        <br />
        <Category />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
