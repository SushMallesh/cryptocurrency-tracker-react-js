import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="app-container">
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <img
      className="currency-image"
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency"
    />
    <div className="app-body">
      <div className="header-container">
        <h1 className="coin-type">Coin Type</h1>
        <div className="currencies-header">
          <h1 className="header-name">USD</h1>
          <h1 className="header-name">EURO</h1>
        </div>
      </div>
      <CryptocurrenciesList />
    </div>
  </div>
)

export default CryptocurrencyTracker
