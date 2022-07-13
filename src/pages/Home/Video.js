import React from "react";

function Video() {
  return (
    <div>
      <video loop autoPlay>
        <source src="images/Licco_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
