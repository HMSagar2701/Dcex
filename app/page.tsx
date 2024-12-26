import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-24 space-y-12">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
