import Hero from '../../components/Hero/Hero';
import Collection from '../Collection/Collection';
import FindYourPerfectMatch from '../FindYourPerfectMatch/FindYourPerfectMatch';
import MatchAProfile from '../MatchAProfile/MatchAProfile';
import Trusted from '../Trusted/Trusted';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
const Home = () => {
  return (
    <div>
      <Hero />
      <FindYourPerfectMatch/>
      <MatchAProfile/>
      <Trusted/>
      <WhyChooseUs/>
      <Collection/>
    </div>
  );
};

export default Home;
