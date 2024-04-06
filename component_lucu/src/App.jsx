import { useState } from 'react';

function App() {
  const [elements, setElements] = useState([]);
// add logic =>membuat salinan dari hooks yang membuat hooks tetap kosong jadi tombol add hanya akan menambahkan satu element perclick
  const addElement = () => {
    setElements(prevElements => [...prevElements, 'Elemen Baru']);
  }
// delete logic => menghasilkan list baru yang kosong karena tidak ada kondisi yang sesuai dengan method fi;ter
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
