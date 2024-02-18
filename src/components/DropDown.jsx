/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// eslint-disable-next-line react/prop-types
function DropDown({
  extend,
  title = "NIVEAU WORKSHOP 1",
  disable,
  options,
  value,
  onChange,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (value === "") {
      onChange(title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={` relative ${extend ? "w-full" : "md:w-[49%]"} w-full mb-[2%]`}
    >
      <div
        className={`flex 
		justify-between items-center  cursor-pointer select-none p-4 
		bg-transparent bg-gradient-to-br from-white/25 to-white/7 outline-none rounded-full border ${
      show ? "border-white" : "border-white/30"
    } transition-colors duration-200
    ${disable ? "cursor-not-allowed opacity-50" : ""}
    `}
        onClick={() => {
          if (!disable) setShow(!show);
        }}
      >
        <span
          className={` transition-colors duration-200 ${
            value !== title ? "text-white" : "text-white/30"
          }`}
        >
          {value}
        </span>
        <KeyboardArrowDownIcon className={`${show ? " rotate-180" : ""}`} />
      </div>
      <MenuOptions
        show={show}
        title={title}
        setSelected={onChange}
        setShow={setShow}
        options={options}
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function MenuOptions({ show, title, options, setSelected, setShow }) {
  return (
    <div
      className={` transition-all duration-200 overflow-hidden w-full mt-4 rounded-[43px] bg-transparent bg-gradient-to-br from-white/25 to-white/7 border border-white  outline-none space-y-3 ${
        show ? "flex-col p-4 py-6 opacity-1" : " h-[0px] p-0 opacity-0"
      } ${show ? "mb-4" : ""}`}
    >
      <p className=" opacity-50">{title}</p>
      <div>
        {options?.map((ele, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected(ele);
              setShow(false);
            }}
            className=" cursor-pointer  p-2 px-4 w-full mt-4 rounded-[43px] bg-transparent bg-gradient-to-br from-white/25 to-white/7 border border-white/30 hover:border-white transition-colors duration-200  outline-none "
          >
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
