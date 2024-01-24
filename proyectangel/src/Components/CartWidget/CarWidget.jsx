import { BsCart } from "react-icons/bs";
import './CarWidget.css'

const CarWidget = () => {
    return (
    <div className="cart-container">
        <button>
        <BsCart  className="custom-cart" /> 
        </button>
    </div>
)
}

export default CarWidget