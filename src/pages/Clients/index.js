import React from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ClientsList from "./ClientsList";
import Intro from "./Intro";

function Clients() {
  return (
    <div>
      <Layout>
        <Intro />
        <ClientsList />
        <div className="py-6">
          <Footer />
        </div>
      </Layout>
    </div>
  );
}

export default Clients;
