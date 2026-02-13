import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import CTA from "../components/CTA";

export default function Home() {
    return (
        <main className="transition-colors duration-700 ease-in-out">
            <Hero />
            <Features />
            {/* <Projects /> */}
            <Pricing />
            <Faq />
            <CTA />
        </main>
    )
}