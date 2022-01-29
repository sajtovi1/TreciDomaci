import React from 'react';
import valute from './valute';
import './Tabela.css';
const listaValuta = Object.keys(valute);

function Tabela() {

  return (
    <div>
      <table className='tabelaVrednosti'>
        <tr>
          <td>*</td>
          {listaValuta.map((val) => (
            <td>{val}</td>
          ))}
        </tr>
        {listaValuta.map((valuta, index) => {
          return (
            <RedUTabeli valuta={valuta} key={index} />
          );
        })}
      </table>
    </div>
  );
}

export function RedUTabeli({ valuta }) {
  return (
    <tr>
      <td>{valuta}</td>
      {listaValuta.map((_, index) => (
        <td>
          {(valute[valuta] / valute[listaValuta[index]]).toFixed(6)}
        </td>
      ))}
    </tr>
  )
}



export default Tabela;
