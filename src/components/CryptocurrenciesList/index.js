import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachCurrency => ({
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      usdValue: eachCurrency.usd_value,
    }))

    this.setState({cryptoCurrenciesList: formattedData, isLoading: false})
  }

  renderCurrenciesList = () => {
    const {cryptoCurrenciesList} = this.state
    return (
      <ul className="currency-list-container">
        {cryptoCurrenciesList.map(eachCurrency => (
          <CryptocurrencyItem
            eachCurrency={eachCurrency}
            key={eachCurrency.currencyName}
          />
        ))}
      </ul>
    )
  }

  renderSpinner = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderSpinner() : this.renderCurrenciesList()
  }
}

export default CryptocurrenciesList
