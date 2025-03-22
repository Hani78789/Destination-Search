import {Component} from 'react' // Corrected import
import DestinationItem from '../DestinationItem' // Corrected import
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredDestinations = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>

        <div className="search-container">
          <input
            type="search" // Corrected input type
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="search-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {filteredDestinations.map(eachItem => (
            <DestinationItem
              key={eachItem.id} // Added key prop
              destinationDetails={eachItem} // Corrected prop name
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch // Corrected export
