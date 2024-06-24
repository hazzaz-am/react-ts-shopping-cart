import { ReactNode, createContext } from "react";

interface ShoppingCartProviderProps {
	children: ReactNode;
}

export const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
	return (
		<ShoppingCartContext.Provider value={{}}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export default ShoppingCartProvider;
