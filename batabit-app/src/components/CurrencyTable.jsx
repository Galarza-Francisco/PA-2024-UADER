import React from 'react';
import img from '../assets/imgs/Bitcoin.svg';

const CurrencyTable = ({ currencies, lastUpdated }) => {
  return (
    <section className="currency-table-section">
        <img src={img} alt="" className='w-full'/>
      <h2 className='p-4 font-bold'>Visibilizamos todas las tasas de cambio.</h2>
      <p>
        Traemos información en tiempo real de las casas de cambio y las monedas más
        importantes del mundo.
      </p>
      <div className="currency-table-container">
        <table>
          <thead>
            <tr>
              <th>Monedas</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency, index) => (
              <tr key={index}>
                <td className="table__top-left">{currency.name}</td>
                <td className="table__right">
                  {currency.price}
                  {currency.trend === 'down' && <span className="down"></span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="currency-table-date">
        <p>
          <b>Actualizado:</b> {lastUpdated}
        </p>
      </div>
    </section>
  );
};

export default CurrencyTable;
