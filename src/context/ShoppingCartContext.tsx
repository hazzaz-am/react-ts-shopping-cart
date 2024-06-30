import { ReactNode, createContext, useState } from "react";

interface ShoppingCartProviderProps {
	children: ReactNode;
}

interface CartItem {
	id: number;
	quantity: number;
}

interface ShoppingCartContext {
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const getItemQuantity = (id: number) => {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	};

	const increaseCartQuantity = (id: number) => {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id) === null) {
				return [...currItems, { id, quantity: 1 }];
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id: number) => {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeFromCart = (id: number) => {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export default ShoppingCartProvider;
