import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ratings } from "@/components/Ratings";
import { Services } from "@/components/Services";
import { Guarantee } from "@/components/Guarantee";

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
    </div>
  );
};

export default Index;