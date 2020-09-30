import React from "react"
import IcoMoon from "react-icomoon"
const iconSet = require("./selection.json")
// Icon Set: https://icomoon.io/app/#/select
 
const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};
 
export default Icon;