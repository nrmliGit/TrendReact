import { Search } from "lucide-react";
import { useState } from "react";
import { useProducts } from "../../providers/contexts/ProductContext";

export default function SearchField() {
  const { setSearchTerm, searchTerm } = useProducts();
  const [inputTerm, setInputTerm] = useState(searchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTerm(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchTerm(inputTerm);
  };
  return (
    <div className="w-[598px] bg-[#F3F3F3] p-[10px] rounded-lg h-[42.4px]  flex items-center justify-between">
      <input
        className="w-[60%] bg-[#F3F3F3] focus:outline-none"
        type="text"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchSubmit}>
        <Search className="text-[#f27a1a]" />
      </button>
    </div>
  );
}
