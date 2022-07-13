import React from "react";
import Layout from "../../components/Layout";
import Address from "./Address";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 px-32 mt-32">
          <Address />
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
