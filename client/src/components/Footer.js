import React from "react";

function Footer() {
  // https://www.w3schools.com/howto/howto_css_fixed_footer.asp
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: 100 + "%",
          backgroundColor: "#0275d8",
          color: "white",
          textAlign: "center"
        }}
      >
        <p>© 2021 | Eddie Phimansone | All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
