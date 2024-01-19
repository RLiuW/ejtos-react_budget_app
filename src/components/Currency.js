
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
  };
  return (
    <div style={styles.container}>
      <div style={styles.labelContainer}>
        <label htmlFor="currencySelector" style={styles.label}>Select Currency: </label>
        <select id="currencySelector" onChange={handleCurrencyChange} style={styles.select}>
          <option value="USD">Dollar (USD)</option>
          <option value="GBP">Pound (GBP)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="BRL">Real (BRL)</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'cleft',
  },
  labelContainer: {
    background: 'purple',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    color: 'white',
  },
  select: {
    marginTop: '8px',
  },
};

export default CurrencySelector;
  