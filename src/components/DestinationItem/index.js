import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
