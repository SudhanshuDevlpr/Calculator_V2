import { useState } from "react";
import Container from "./components/Container";
function App() {
  let Bton = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    '='
  ];
  const [Button,setButton]=useState(Bton)
  let [item, setItem] = useState('')

  function handleOnclick(ButtonName) {
  if(ButtonName==='C')
  {
    setItem("");
  }else if(ButtonName==='='){
    const expression = item.join(""); // or item.join(" ")
    const result = eval(expression);
   setItem(result)
    
  }else{
    let newItem=ButtonName
   let newItemArr=[...item,newItem]
  setItem(newItemArr)
  }
    
  }
  return (
    <>
      <Container Btn={Button} handle={handleOnclick} item={item}></Container>
    </>
  );
}
export default App;
