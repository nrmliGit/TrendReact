import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
};

export type ProductState = {
  products: Product[];
  filteredProducts: Product[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const ProductContext = createContext<ProductState | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context == undefined)
    throw new Error("ProductContext-lə bağlı problem var!");
  return context;
};

export default function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getProducts = async () => {
    const request = await fetch("http://localhost:3000/datas");
    return await request.json();
  };

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
