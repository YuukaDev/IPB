import Navigation from "../components/Navigation/Navigation";
import ContactForm from "../components/Help/ContactForm";
import FAQ from "../components/Help/FAQ";
import Footer from "../components/Footer/Footer";

export default function Help() {
    return (
        <>
            <Navigation />
            <div className="flex h-landingHero flex-col justify-center items-center">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}
