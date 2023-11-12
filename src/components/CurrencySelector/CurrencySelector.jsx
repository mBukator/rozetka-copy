import React from 'react'

const CurrencySelector =({selectedCurrency, onChange}) => {
  return (
    <select value={selectedCurrency} onChange={onChange}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
    </select>
  )
}

export default CurrencySelector