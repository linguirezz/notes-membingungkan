import { useState } from 'react';

function App() {
  const [elements, setElements] = useState([]);

  const handleClick = () => {
    setElements(prevElements => [...prevElements, <><textarea></textarea></>]);
  }

  return (
    <div>
      <button onClick={handleClick}>Tambah Elemen</button>
      {elements.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </div>
  );
}

export default App;
