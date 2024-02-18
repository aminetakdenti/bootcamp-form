import Form from "./components/Form";

function App() {
  return (
    <div className="container mx-auto pt-10 text-white flex flex-col items-center justify-between gap-5 min-h-screen md:flex-row md:justify-between w-full">
      <Form />
      <div className="hidden md:block h-[497px] overflow-hidden">
        <img src="/register-image.png" className="w-full h-full" alt="image" />
      </div>
    </div>
  );
}

export default App;
