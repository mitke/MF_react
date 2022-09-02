import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Zdravo Svete!");
  const promeniNaslov = () => {
    setTitle("NASLOV PROMENJEN!!!");
  }

  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={ promeniNaslov }>promeni naslov</button>
    </div>
  );
}
 
export default App;