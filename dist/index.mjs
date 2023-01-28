// src/index.tsx
import React, { useMemo } from "react";
import qr from "qr-image-color";
var getTextFromChildren = (children) => {
  let label = "";
  React.Children.map(children, (child) => {
    if (typeof child === "string") {
      label += child;
    }
  });
  return label;
};
var ReactQRImage = ({
  text = "",
  ecLevel = "M",
  size = 5,
  margin = 4,
  transparent = false,
  color = "#000",
  background,
  children,
  ...props
}) => {
  const options = useMemo(
    () => ({
      type: "png",
      ecLevel,
      size,
      margin,
      transparent,
      color,
      background
    }),
    [ecLevel, size, margin, transparent, color, background]
  );
  const uri = useMemo(() => {
    const svgStr = qr.imageSync(text || getTextFromChildren(children), options);
    return `data:image/png;base64, ${svgStr.toString("base64")}`;
  }, [options, children, text]);
  return /* @__PURE__ */ React.createElement("img", {
    alt: "",
    ...props,
    src: uri
  });
};
var src_default = ReactQRImage;
export {
  src_default as default
};
