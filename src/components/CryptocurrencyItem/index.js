import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCurrency
  return (
    <li className="currency-list-item">
      <div className="currency-logo-name-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currencies-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
