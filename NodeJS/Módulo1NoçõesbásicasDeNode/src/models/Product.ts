type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto W', price: 20},
    {title: 'Produto Z', price: 100}
]

export const Product = {
    getAll: (): Product[] =>{
        return data
    },
    getPrice: (price: number): Product[] =>{
        return data.filter(item => item.price >= price)

        /*
        return data.filter(item =>{
            return data.filter(item => item.price >= price)

            
            if(item.price >= price){
                return true
            }else{
                return false
            }
            
        })
        */
    }
}