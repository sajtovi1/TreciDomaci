import React, { useState } from 'react';
import './Konverter.css';
import valute from './valute';

function Konvertor() {
  const [prvaVrednost, setPrvaVrednost] = useState('ETH');
  const [drugaVrednost, setDrugaVrednost] = useState('ETH');

  const [prviUnos, setPrviUnos] = useState(1);
  const [rezultat, setRezultat] = useState(0);

  return (
    <div className='konverter'>
      <select onChange={(e) => setPrvaVrednost(e.target.value)}>
        {Object.keys(valute).map((valuta) => (
          <option>{valuta}</option>
        ))}
      </select>
      <input value={prviUnos} onChange={(e) => setPrviUnos(e.target.value)} />

      <button onClick={() => setRezultat((Number.parseFloat(prviUnos) * valute[prvaVrednost]) / valute[drugaVrednost])}>Konvertuj</button>

      <select onChange={(e) => setDrugaVrednost(e.target.value)}>
        {Object.keys(valute).map((valuta) => (
          <option>{valuta}</option>
        ))}
      </select>

      <input value={rezultat} />
    </div>
  );
}

export default Konvertor;
