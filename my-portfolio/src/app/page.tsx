import Hero from "@/components/about/Hero";
import Header from "@/components/home/Header";
import Skills from "@/components/contact/Skills"

export default function Home() {
  return (
    <>
    <main>
      {/* Header Section */}
     <Header/>
     {/* Hero Section */}
     <Hero/>
     {/* Skills/Contact Section */}
     <Skills/>
     
    </main>
    </>
  );
}
