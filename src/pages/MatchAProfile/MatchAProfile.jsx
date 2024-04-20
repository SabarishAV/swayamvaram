import "./MatchAProfile.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { GiBigDiamondRing } from "react-icons/gi";

const MatchAProfile = () => {
  return (
    <div className="main-parent">
      <div className="main-parent-h1-div">
        <h1 className="main-parent-h1">
          How to match a <span className="span-match-profile"> profile ?</span>
        </h1>
      </div>
      
      <div className="data-containers">
        <div className="data-container-one">
          <div className="data-containers-icons-div">
            <AiOutlineUserAdd className="data-containers-icons" />
          </div>
          <h2 className="data-containers-h2">Register your profile</h2>
          <div className="data-containers-p-div">
            You can easily register your profile on Swayamvara completely free
            of cost within few steps.
          </div>
        </div>
        <div className="data-container-one">
          <div className="data-containers-icons-div">
            <BiSearchAlt className="data-containers-icons" />
          </div>
          <h2 className="data-containers-h2">Find your match</h2>
          <div className="data-containers-p-div">
            You can easily search your soulmate of your preference.
          </div>
        </div>
        <div className="data-container-one">
          <div className="data-containers-icons-div">
            <FiPhone className="data-containers-icons" />
          </div>
          <h2 className="data-containers-h2">Contact Us</h2>
          <div className="data-containers-p-div">
          Once you’ve chosen your favourite one we arrange a meeting with your chosen one.
          </div>
        </div>
        <div className="data-container-one">
          <div className="data-containers-icons-div">
            <GiBigDiamondRing className="data-containers-icons" />
          </div>
          <h2 className="data-containers-h2">Get married!</h2>
          <div className="data-containers-p-div">If all set, Get married!</div>
        </div>
      </div>
    </div>
  );
};

export default MatchAProfile;
