import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ arrayProduct,handleDetail,handleCart }) => {
	return (
			<div className="row mt-5 justify-content-between m-0" style={{width:"100%"}}>
				{arrayProduct.map((product,index) =>
				<div className="col-3 mb-2" key={index+1}>
					<ProductItem product={product} handleDetail={handleDetail} handleCart={handleCart}/>
				</div>
				)}
			</div>
	)
}

export default ProductList