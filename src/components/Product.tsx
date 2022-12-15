import {IProduct} from "../models";


interface ProductProps {
    product: IProduct
}

export const Product = ({product} : ProductProps) => {
    return <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>{product.title}</div>
}
