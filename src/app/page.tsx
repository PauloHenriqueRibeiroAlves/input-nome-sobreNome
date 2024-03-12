"use client"
import { useState } from "react";
import { person } from "./types/person";

const Page =() => {
  const [fullName, setFullName] = useState <person>({ name:'', lastName:''});
  const hundleClearButton = () =>{
    setFullName({name: '', lastName: ''});
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input type="text" placeholder="Nome" value={fullName.name}
      className="border border-black p-3 text-2xl text-black rounded-md mb-3"      
      onChange={e => setFullName({ ...fullName, name: e.target.value, })}
      />
      <input type="text" placeholder="Sobrenome" value={fullName.lastName}
      className="border border-black p-3 text-2xl text-black rounded-md mb-3"      
      onChange={e => setFullName({ ...fullName, lastName: e.target.value})}
      />
      <p>Meu nome é:</p>
      <hr/>
      <p>{fullName.name} {fullName.lastName}</p>
      <br/>
      <button onClick={hundleClearButton}
        className="p-3 text-2xl text-white bg bg-blue-950 rounded-md mb-3">
        Limpar nome
      </button>
    </div>
  );
}

export default Page; //Precisa ter esse comando para ele se exportado e assim funcionar