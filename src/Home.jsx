import Banner from "./Components/Banner/Banner"
import Choose from "./Components/Choose/Choose"
import Gallery from "./Components/Gallery/Gallery"
import Offer from "./Components/Offer/Offer"
import Profile from "./Components/Profile/Profile"
import Trusted from "./Components/Trusted/Trusted"

const Home = () => {
  return (
    <>
      <Banner />
      <Offer />
      <Profile />
      <Trusted />
      <Choose />
      <Gallery />
    </>
  )
}

export default Home