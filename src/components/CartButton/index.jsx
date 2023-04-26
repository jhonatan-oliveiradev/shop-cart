import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./styles.css";

function CartButton() {
	return (
		<button type="button" className="cart__button">
			<AiOutlineShoppingCart />
			<span className="card-status">1</span>
		</button>
	);
}

export default CartButton;
