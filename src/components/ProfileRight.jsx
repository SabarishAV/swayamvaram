import React from "react";

const ProfileRight = () => {
  return (
    <div className="contents-profile-right">
      <div className="right-left">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>Bride name</p>
      </div>
      <div className="right-right">
        <p
          className="p-one-right"
          style={{ fontSize: "20px", marginBottom: "10px" }}
        >
          24 yrs, 151 cm, Malayalam
        </p>
        <p style={{ fontSize: "17px" }} className="cast">Caste</p>
        <p>Diploma, Interior designer, <span>Kozhikode, Kerala</span></p>
        <button
          className="view-full-profile-button"
          style={{ backgroundColor: "#FFD600", color: "#530F29" }}
        >
          View full profile
        </button>
      </div>
    </div>
  );
};

export default ProfileRight;
