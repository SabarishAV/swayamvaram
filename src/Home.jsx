import Banner from "./components/Banner/Banner"
import Choose from "./components/Choose/Choose"
import Gallery from "./components/Gallery/Gallery"
import Offer from "./components/Offer/Offer"
import Profile from "./components/Profile/Profile"
import Trusted from "./components/Trusted/Trusted"

const Home = () => {
  return (
   <>
      <Banner/>
      <Offer />
      <Profile />
      <Trusted />
      <Choose />
      <Gallery />
   </>
  )
}

export default Home