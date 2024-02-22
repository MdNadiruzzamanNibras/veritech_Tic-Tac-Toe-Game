import { useState } from "react";
import cross from "./assets/images/Corsepng.png"
import circle from "./assets/images/o.png"


const App = () => {
  let data = ["", "", "", "", "", "", "", "", ""]
  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  const toggle = (e, num) => {
    if (lock) {
      return 0
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross}" alt="" />`
      data[num] = 'x'
      setCount(++count)
    }
    else {
      e.target.innerHTML = `<img src="${circle}" alt="" />`
      data[num] = 'o'
      setCount(++count)
    }
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
        <div className="flex">
          <div className="w-20 h-20 m-1 bg-slate-300 flex justify-center items-center" onClick={(e)=>toggle(e,0)}></div>
   <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,1)}></div>
    <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,2)}></div>
    </div>
        <div className="flex">
          <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,3)}></div>
   <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,4)}></div>
    <div className="w-20 h-20 m-1 bg-slate-300"onClick={(e)=>toggle(e,5)}></div>
    </div>
        <div className="flex">
          <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,6)}></div>
   <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,7)}></div>
    <div className="w-20 h-20 m-1 bg-slate-300" onClick={(e)=>toggle(e,8)}></div>
    </div>

      </div>
      </div>
    </div>
  );
};

export default App;