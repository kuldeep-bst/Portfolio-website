import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyPortfolio />
      <MySkills />
      <ContactMe />
      <Footer />
    </>
  );
}
