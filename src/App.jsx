import { useState } from "react";
import ChangeButton from "./components/ChangeButton";
import Counter from "./components/Counter";
import Reset from "./components/Reset";
import Tittle from "./components/Tittle";

export default function App()
{
  const [count, setCount]= useState(0)
  return(<>
    <main>
      <div className="card">
        <Tittle/>
        <Counter count={count}/>
        <ChangeButton setCount={setCount}/>
        <Reset count={count} setCount ={setCount}/>
     
      
      </div>

    </main>
  
  
  
   </>
   )


}
