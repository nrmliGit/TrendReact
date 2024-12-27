import { Marka } from "../../components/layout/Marka";
import { Price } from "../../components/layout/Price";
import { Product } from "./ProductContext"

export const filterProductsByBrandName = (
    checkedBrands: Marka[],
    products: Product[]
) => {
    const results: Product[] = [];

    for(const {marka} of checkedBrands){
        for(const product of products){
            if(product.name === marka) results.push(product);
        }
    }

    return results;
}


const priceToNumber = (price: string) => {
     const min = price.split("-")[0];
     const minPrice = min.slice(0, min.length-3)
     const max = price.split("-")[1];
     const maxPrice = max.slice(0, min.length-2)
     const result = [minPrice, maxPrice];

    return result ;
}




export const filterProductsByPrice = (
    checkedPrice: Price[],
    products: Product[]
) => {
    let results: Product[] = [];

    for(const {price} of checkedPrice){
       let minPrice = priceToNumber(price)[0] 
       let maxPrice = priceToNumber(price)[1]  
        for(const product of products){
            if((product.price >= Number(minPrice)) || ((product.price <= Number(maxPrice)))){ results= []; results.push(product)};
        }
    }

    return results;
}

export const takeValueOfPrice = (checkedPrice: Price[]) => {
    for(const {price} of checkedPrice){
        let minPrice = priceToNumber(price)[0] 
        let maxPrice = priceToNumber(price)[1] 
        const result = [minPrice, maxPrice]
        return result;
    }
    
} 
