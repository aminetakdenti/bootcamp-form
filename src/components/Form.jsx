import { useEffect, useState } from "react";

import DropDown from "./DropDown";
import Input from "./Input";
import useFormInput from "../hooks/useFormInput";
import useDropdown from "../hooks/useDropdown";

import { niveau, workshops } from "../constant/dropdown.json";

function Form() {
  const [workshop1Options] = useState(workshops.map((ele) => ele.name));
  const [workshop2Options, setWorkshop2Options] = useState(
    workshops.map((ele) => ele.name)
  );

  const nom = useFormInput("");
  const prenom = useFormInput("");
  const email = useFormInput("");
  const matricule = useFormInput("");
  const specialite = useFormInput("");
  const workshop1 = useDropdown("");
  const workshop2 = useDropdown("");
  const workshop1Niveau = useDropdown("");
  const workshop2Niveau = useDropdown("");

  useEffect(() => {
    const index = workshops.findIndex((ele) => ele.name === workshop1.value);
    if (index > -1) {
      setWorkshop2Options(workshops[index].notWith);
    }
  }, [workshop1.value]);

  function allowSingup() {
    return (
      validateEmail(email.value) &&
      nom.value.trim() !== "" &&
      prenom.value.trim() !== "" &&
      matricule.value.trim() !== "" &&
      specialite.value.trim() !== "" &&
      workshop1.value.trim() !== "" &&
      workshop2.value.trim() !== "" &&
      workshop1Niveau.value.trim() !== "" &&
      workshop2Niveau.value.trim() !== ""
    );
  }

  function handleSignIn(e) {
    if (validateEmail(email.value)) {
      e.preventDefault();
      const form = new Object();
      form["nom"] = nom.value;
      form["prenom"] = prenom.value;
      form["email"] = email.value;
      form["matricule"] = matricule.value;
      form["specialite"] = specialite.value;
      form["workshop1"] = workshop1.value;
      form["workshop2"] = workshop2.value;
      form["workshop1Niveau"] = workshop1Niveau.value;
      form["workshop2Niveau"] = workshop2Niveau.value;
    }
  }

  return (
    <div className="flex md:w-1/2 h-fit items-center flex-col gap-8 bg-transparent border border-white/30 bg-gradient-to-br from-white/25 to-white/7 p-6 py-8 rounded-[46px] transition-all duration-200">
      <h1 className=" uppercase text-4xl font-bold">sign up</h1>
      <form className="flex flex-wrap justify-between ">
        <Input name="NOM" type="text" {...nom} />
        <Input name="PRÉNOM" type="text" {...prenom} />
        <Input name="E-MAIL" type="email" extand {...email} />
        <Input name="MATRICULE" type="text" {...matricule} />
        <Input name="SPECIALITÉ" type="text" {...specialite} />
        <DropDown
          title="WORKSHOP 1"
          options={workshop1Options}
          {...workshop1}
        />
        <DropDown
          title="WORKSHOP 2"
          options={workshop2Options}
          {...workshop2}
        />
        <DropDown
          title="NIVEAU WORKSHOP 1"
          options={niveau}
          {...workshop1Niveau}
        />
        <DropDown
          title="NIVEAU WORKSHOP 2"
          options={niveau}
          {...workshop2Niveau}
        />
        <SignUpBtn onClick={handleSignIn} disable={allowSingup} />
      </form>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function SignUpBtn({ onClick, disable }) {
  return (
    <div className="w-full flex items-cente justify-center mt-10">
      <button
        className="cursor-pointer bg-buttonPrimary p-4 rounded-xl hover:bg-buttonSecondery transition-colors duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={onClick}
        disabled={!disable()}
      >
        SIGN UP
      </button>
    </div>
  );
}

function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(email);
}

export default Form;
