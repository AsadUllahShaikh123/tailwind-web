import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

const App = () => {
  let [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    job: "",
    buisness: "",
    address: "",
    description: "",
    key: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log("hello");
  };

  let [image, setImage] = useState({
    file1: "",
    file2: "",
    file3: "",
  });
  let [click, setClick] = useState({
    file1: true,
    file2: true,
    file3: true,
  });
  let handleClick = (e) => {
    document.getElementById(e.target.name).click();
    
  };
  let handleImageChange = (e) => {
    let { name } = e.target;
    let preview = URL.createObjectURL(e.target.files[0]);
    setImage({ ...image, [name]: preview });
    setClick({...click,[name]:false})
  };
  return (
    <>
      <div className="w-full md:w-3/4 md:mr-auto md:ml-auto px-2">
        <Header />
        <Hero />
        <Info
          inputs={inputs}
          setInputs={setInputs}
          handleChange={handleChange}
          image={image}
          setImage={setImage}
          handleClick={handleClick}
          handleImageChange={handleImageChange}
          click={click}
          setClick={setClick}
        />
      </div>
    </>
  );
};

export default App;
