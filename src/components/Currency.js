
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
          <option value="USD" style={styles.option}>$ Dollar</option>
          <option value="GBP" style={styles.option}>£ Pound</option>
          <option value="EUR" style={styles.option}>€ Euro</option>
          <option value="BRL" style={styles.option}>₹ Ruppee</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
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
    background: 'purple',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px',
    cursor: 'pointer',
  },
  option: {
    background: 'purple',
    color: 'white',
  },
};

export default CurrencySelector;
  