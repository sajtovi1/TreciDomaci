import React from 'react';
import valute from './valute';
import './Tabela.css';

function Tabela() {
  const listaValuta = Object.keys(valute);

  return (
    <div>
      <table className='tabelaVrednosti'>
        <tr>
          <td>*</td>
          {listaValuta.map((val) => (
            <td>{val}</td>
          ))}
        </tr>
        {listaValuta.map((_, key) => {
          return (
            <tr>
              <td>{listaValuta[key]}</td>
              {listaValuta.map((_, index) => (
                <td>
                  {console.log(key, index)}
                  {(valute[listaValuta[key]] / valute[listaValuta[index]]).toFixed(6)}
                </td>
              ))}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Tabela;
