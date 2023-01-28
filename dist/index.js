"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_react = __toESM(require("react"));
var import_qr_image_color = __toESM(require("qr-image-color"));
var getTextFromChildren = (children) => {
  let label = "";
  import_react.default.Children.map(children, (child) => {
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
  const options = (0, import_react.useMemo)(
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
  const uri = (0, import_react.useMemo)(() => {
    const svgStr = import_qr_image_color.default.imageSync(text || getTextFromChildren(children), options);
    return `data:image/png;base64, ${svgStr.toString("base64")}`;
  }, [options, children, text]);
  return /* @__PURE__ */ import_react.default.createElement("img", {
    alt: "",
    ...props,
    src: uri
  });
};
var src_default = ReactQRImage;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
