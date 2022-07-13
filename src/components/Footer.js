import React from "react";
import Video from "../pages/Home/Video";

function Footer() {
  return (
    <div className="py-0">
      <div className="bg-secondary flex space-x-10 p-2">
        <div className="flex flex-col space-y-0"></div>
        <div className="content-center w-60 h-60 align-middle">
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Footer;
