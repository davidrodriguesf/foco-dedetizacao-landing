import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ratings } from "@/components/Ratings";
import { Services } from "@/components/Services";
import { Guarantee } from "@/components/Guarantee";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Ratings />
        <Services />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;