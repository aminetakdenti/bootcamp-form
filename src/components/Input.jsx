// eslint-disable-next-line react/prop-types
function Input({ name, extand }) {
  return (
    <div
      className={` rounded-full border border-white/30 focus-within:border-white transition-colors duration-200 last:mb-0 ${
        extand ? "w-full" : "w-[49%]"
      } mb-[6%]`}
    >
      <input
        required
        className="w-full h-full p-4 pl-8 rounded-full bg-transparent bg-gradient-to-br from-white/25 to-white/7 outline-none"
        placeholder={name}
      />
    </div>
  );
}

export default Input;
