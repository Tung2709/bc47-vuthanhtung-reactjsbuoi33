import React from 'react'

const ProductItem = ({ product,handleDetail,handleCart }) => {
	// console.log(product)
	return (
	
			<div className="card">
				<img src={product.image} className="card-img-top  m-auto" style={{ height:200 , width:200 }} alt="..." />
				<div className="card-body">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">{product.shortDescription}</p>
					<div className="button d-flex justify-content-between">
					<p className='my-auto fw-bold'>{product.price} $</p>
					<div>
					<button onClick={()=>{handleDetail(product.id)}} className='btn btn-outline-success' data-bs-toggle="modal" data-bs-target="#detail">Xem chi tiết</button>
					<button onClick={()=>{handleCart(product.id)}} className='btn btn-outline-primary'>Add to cart</button>
					</div>
					</div>
				</div>
			</div>
	)
}

export default ProductItem