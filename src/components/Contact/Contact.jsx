import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="content-paragraph">
        <p className="right-p-headin-contact">Contact us for any help - swayamvarammatrimony.com</p>
        <p className="right-p-headin-contact">Have a question / complaint / feedback for us? We are here to help you.</p>
      </div>
      <div className="container1">
        <form action="/action_page.php">
          <div className="left-contact">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Name <span>*</span></label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Email ID <span>*</span> </label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Phone no. <span>*</span></label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country" >Type <span>*</span></label>
              </div>
              <div className="col-75 special" >
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Subject <span>*</span></label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" />
              </div>
            </div>
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="subject">Qualification <span>*</span></label>
              </div>
              <div className="col-75">
                <textarea
                className="qualification"
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "200px" }} // Fix: Style object instead of string
                ></textarea>
              </div>
            </div>
            <br />
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
        <div className="right-sec">
          <div className="right-section-top">
            <p className="right-p-headin-contact">
              Call us - For Match Making related
            </p>
            <p className="right-p-headin-contact">queries</p>
            <p className="red-content">+12 3456 789012</p>
            <p>We are available on all working days</p>
            <p>between 10 AM to 6 PM (IST).</p>
          </div>
          <div className="right-section-bottom">
            <p className="right-p-headin-contact">Write to us.</p>
           
            <p className="red-content mail-help">help@swayamvarammatrimony.com</p>
           
            <p>
            For any match Making related queries / feedbacks
            </p>
            <p className="bottom-content-div">complaints</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
