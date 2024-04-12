import "./App.css";
import FindYourPerfectMatch from "./components/FindYourPerfectMatch/FindYourPerfectMatch";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";
import Collection from "./components/Collection/Collection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MatchAProfile from "./components/MatchAProfile/MatchAProfile";
import Trusted from "./components/Trusted/Trusted";

function Pages() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
      <FindYourPerfectMatch />
      <MatchAProfile />
      <Trusted />
      <WhyChooseUs />
      <Collection />
      <Footer />
    </div>
  );
}

export default Pages;


