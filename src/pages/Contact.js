import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact-us-image.avif"
            alt="contact us"
            style={{ width: "70vh" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
            inventore!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.ecomsupport.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 91-1234567890
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1234-1234 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
