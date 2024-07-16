import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecom app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.png"
            alt="contact us"
            style={{ width: "70vh" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, vel
            officia. Molestias tempore quibusdam expedita eaque, laudantium rem,
            non porro nisi obcaecati qui odio repellat asperiores, minima fugit
            at. Mollitia laborum laboriosam id quaerat sint quibusdam iure
            molestias expedita saepe quas rerum, est, odit voluptatibus quam
            nesciunt? Alias, libero iure.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
