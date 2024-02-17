import DropDown from "./DropDown";
import Input from "./Input";

function Form() {
  return (
    <div className="flex items-center flex-col gap-8 bg-transparent border border-white/30 bg-gradient-to-br from-white/25 to-white/7 p-6 py-8 rounded-[46px]">
      <h1>sign up</h1>
      <form className="flex flex-wrap justify-between">
        <Input name="nom" />
        <Input name="prénom" />
        <Input name="prénom" extand />
        <Input name="nom" />
        <Input name="prénom" />
        <Input name="prénom" extand />
        <DropDown />
        <DropDown />
        <input type="submit" value="SIGN UP" className="hover:cursor-pointer" />
      </form>
    </div>
  );
}

export default Form;
