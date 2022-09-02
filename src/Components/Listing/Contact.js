import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Contact = () => {
  const [contact_det, setContactDet] = useState({
    name: "",
    mobile_num: "",
    email: "",
    alt_name: "",
    alt_mobile: "",
  });
  const handleChange = (e) => {
    setContactDet({
      ...contact_det,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>Name</h2>
          <input
            className="lginput"
            name="name"
            onChange={handleChange}
            value={contact_det.name}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Mobile Number</h2>
          <input
            className="input"
            name="mobile_num"
            onChange={handleChange}
            value={contact_det.mobile_num}
          />
        </div>
        <div className="coll1">
          <h2>Email Id</h2>
          <input
            className="input"
            name="email"
            onChange={handleChange}
            value={contact_det.email}
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <h2>Alternate person’s name</h2>
          <input
            className="input"
            name="alt_name"
            onChange={handleChange}
            value={contact_det.alt_name}
          />
        </div>
        <div className="coll1">
          <h2>Alternate person’s Mobile Number</h2>
          <input
            className="input"
            name="alt_mobile"
            onChange={handleChange}
            value={contact_det.alt_mobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;