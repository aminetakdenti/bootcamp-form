import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// eslint-disable-next-line no-unused-vars
const options = ["NIVEAU WORKSHOP 1", "débutant", "intermédiaire", "avancé"];

// eslint-disable-next-line react/prop-types
function DropDown({ extend }) {
  const [show, setShow] = useState(false);

  return (
    <div className={` relative ${extend ? "w-full" : "w-[49%]"}`}>
      <div
        className={`flex 
		justify-between items-center cursor-pointer select-none p-4 
		bg-transparent bg-gradient-to-br from-white/25 to-white/7 outline-none rounded-full border border-white/30 ${
      show ? "border-white" : "border-white/30"
    } transition-colors duration-200`}
        onClick={() => setShow(!show)}
      >
        <span>clicke me</span>
        <KeyboardArrowDownIcon />
      </div>
      <MenuOptions show={show} />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function MenuOptions({ show }) {
  return (
    <div
      className={` absolute w-full mt-3 rounded-[43px] h-64 bg-transparent bg-gradient-to-br from-white/25 to-white/7 border border-white  outline-none ${
        show ? "flex" : "hidden"
      }`}
    ></div>
  );
}

export default DropDown;
