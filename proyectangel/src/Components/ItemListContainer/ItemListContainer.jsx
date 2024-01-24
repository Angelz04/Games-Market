import './ItemListContainer.css'
import PropTypes from 'prop-types'

const ItemListContainer = ({ greeting }) => {
return (
    <h2>{greeting}</h2>
)
}

ItemListContainer.propTypes = {
greeting: PropTypes.any,
}

export default ItemListContainer;