import React from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import Servicios from "./Servicios";

function About() {
  return (
    <div>
      <Layout>
        <div>
          <Intro />
          <Servicios />
          <Footer />
        </div>
      </Layout>
    </div>
  );
}

export default About;
