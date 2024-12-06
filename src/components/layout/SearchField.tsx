import { Search } from 'lucide-react';

export default function SearchField() {
  return (
    <div className='w-[598px] bg-[#F3F3F3] p-[10px] rounded-lg h-[42.4px]  flex items-center justify-between'>
        <input className='w-[60%] bg-[#F3F3F3] focus:outline-none' type="text" placeholder='Aradığınız ürün, kategori veya markayı yazınız'/>
        <Search className='text-[#f27a1a]'/>
    </div>
  )
}
