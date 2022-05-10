import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import Highlight from "../components/Highlight/Highlight";
import About from "../components/About/About";

export const Layout = ({ products }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <FeaturedSection products={products} />
        <Highlight />
        <About />
      </main>
    </div>
  );
};
