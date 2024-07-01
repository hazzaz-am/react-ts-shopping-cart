import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

export function useShoppingCart(): typeof ShoppingCartContext extends React.Context<
	infer T
>
	? T
	: never {
	return useContext(ShoppingCartContext);
}
