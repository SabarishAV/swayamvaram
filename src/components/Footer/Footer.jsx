import "./Footer.css";
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="row">
          <div class="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href="#">Address:......</a>
              </li>
              <li>
                <a href="#">Phone:........</a>
              </li>
              <li>
                <a href="#">Email:info@example.com</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
            <div className="footer-images-brand">
              <img src="./applestore-1.svg" alt="" />
              <img src="./googlestore-1@2x.png" alt="" />
            </div>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Guide</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety information</a>
              </li>
              <li>
                <a href="#">Cancellation</a>
              </li>
              <li>
                <a href="#">Our COVID-19 Response</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>SOCIAL MEDIA</h4>
            <div class="social-links">
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <CiInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="underline" />
        <div className="below-content">
          <div className="div-left">
            <a href="#">Privacy Policy</a>
            <a href="#">terms of use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">legal</a>
            <a href="#">Site Map</a>
          </div>
          <div className="div-right">
            <p>@2024 swayamvaramatrimony.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
