import { React } from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product'
import './shop.css'

const Shop = () => {

    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1> Store</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product, index) => (
                    <Product data={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Shop;