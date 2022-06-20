import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";


const App = () => {

  let [inputs,setInputs] = useState({
    firstName:'',
    lastName :'',
    gender   :'',
    job      :'',
    buisness :'',
    address  :'',
    description:'',
    key       :''
  });
  let handleChange =(e)=>{
      let {name,value} = e.target;
      setInputs({...inputs, [name]:value})
      console.log("hello")      
  }
  return (
    <>
      <div className="w-full md:w-3/4 md:mr-auto md:ml-auto px-2" >
        <Header />
         <Hero />
         <Info inputs={inputs} setInputs={setInputs} handleChange ={handleChange}/>
       </div>

    
    </>
  );
};

export default App;
