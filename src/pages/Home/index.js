import React from "react";
import Layout from "../../components/Layout";
import Biometricos from "./Biometricos";
import Intro_2 from "./Intro_2";
import PorqueLicco from "./PorqueLicco";
import Video from "./Video";

function Clients() {
  return (
    <div>
      <Layout>
        <div className="px-32 sm:px-2">
          <Intro_2 />
          <Biometricos />
          <PorqueLicco />
        </div>
      </Layout>
    </div>
  );
}

export default Clients;
