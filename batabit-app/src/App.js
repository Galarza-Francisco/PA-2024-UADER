import { useState, useEffect } from 'react';
import Header from './components/header';
import CurrencyTable from './components/CurrencyTable';
import ProductInfo from './components/ProductInfo';
import Footer from './components/Footer';
import Prices from './components/Prices';
import { fetchCryptocurrencies } from './services/cryptoService';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const loadCryptocurrencies = async () => {
      const data = await fetchCryptocurrencies();
      const formattedCurrencies = data.map(crypto => ({
        name: crypto.name,
        price: `$${crypto.current_price.toFixed(2)}`,
        trend: crypto.price_change_percentage_24h < 0 ? 'down' : 'up',
      }));
      setCurrencies(formattedCurrencies);
      setLastUpdated(new Date().toLocaleString());
    };

    loadCryptocurrencies();
  }, []);

  return (
    <div>
      <Header />
      <CurrencyTable currencies={currencies} lastUpdated={lastUpdated} />
      <ProductInfo />
      <Prices/>
      <Footer /> 
    </div>
  );
};

export default App;
