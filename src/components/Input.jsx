// eslint-disable-next-line react/prop-types
function Input({ name, extand, value, onChange, type }) {
  return (
    <div
      className={` rounded-full border border-white/30 focus-within:border-white transition-colors duration-200 last:mb-0 ${
        extand ? "w-full" : "md:w-[49%] w-full"
      } mb-[6%]`}
    >
      <input
        type={type}
        required
        className="w-full h-full p-4 pl-8 rounded-full bg-transparent bg-gradient-to-br from-white/25 to-white/7 outline-none"
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
