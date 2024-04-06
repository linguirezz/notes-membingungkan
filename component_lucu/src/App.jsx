import { useState } from 'react';

function App() {
  const [elements, setElements] = useState([]);

  const addElement = () => {
    setElements(prevElements => [...prevElements, 'Elemen Baru']);
  }

  const deleteElement = (index) => {
    setElements(prevElements => prevElements.filter((_, i) => i !== index));
  }

  return (
    <div>
      <button onClick={addElement}>Tambah Elemen</button>
      {elements.map((element, index) => (
        <div key={index}>
          <p>{element}</p>
          <button onClick={() => deleteElement(index)}>Hapus{index}{elements}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
