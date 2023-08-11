import React, { useState } from "react";
//custom image button component
export const BtnImage = ({ imgPath, imgOnClick, imgSize }) => {
  //mouse on hover 
  const [hover, setHover] = useState(false);
  const sectionStyle = {
    background: hover ? "#DEDAFA" : "transparent",
    borderRadius: imgSize * 8,
    margin: imgSize,
    width: imgSize * 2,
    height: imgSize * 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={imgPath ? sectionStyle : {}}
      of="group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {imgPath && (
        <img
          src={imgPath}
          onClick={() => (imgOnClick ? imgOnClick() : undefined)}
          alt=""
          width={imgSize}
          height={imgSize}
        />
      )}
    </div>
  );
};

export default BtnImage;
