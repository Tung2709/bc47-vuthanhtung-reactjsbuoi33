import React, { useState } from 'react'
import ProductList from './ProductList'
import arrayProduct from './Data.json'
import Cart from './Cart'

const BTShoesShop = () => {
	const [detailItem, setDetailItem] = useState(arrayProduct[0])
	let [cartItem, setCartItem] = useState([])
	let sl=0
	cartItem.forEach(e=>sl+=e.soLuong)
	let tongtien=0
	cartItem.forEach(e=>tongtien+=(e.soLuong*e.price))
	let display="d-none"
	if(tongtien){
		display="d-inline-block"
	}else{
		display="d-none"
	}
	const handleDetail = (id) => {
		const item = arrayProduct.find(e => e.id === id)
		setDetailItem(item)
	}
	const handleCart = (id) => {
		setCartItem((currentState)=>{
			const i=currentState.findIndex(e=>e.id===id)
			if(i!==-1){
				currentState[i].soLuong+=1
				console.log(currentState)
				return [...currentState]
			}else{
				const item=arrayProduct.find(e=>e.id===id)
				currentState.push({...item,soLuong:1})
				console.log(currentState)
				return [...currentState]
			}
		})
	}
	const handleQuantity = (id,value) => {
		let cartitem = cartItem
		cartitem.forEach(e => { if (e.id === id) {e.soLuong= e.soLuong+value ||1} })
		setCartItem([...cartitem])
	}

	const handleDel=(id)=>{
		if(id){
			setCartItem((currentState)=>{
				currentState=currentState.filter(e=>e.id!==id)
				return [...currentState]
			})
		}else if(id===0){
			setCartItem([])
		}
	}
	return (
		<div className='container-fluid bg-light position-relative'>
			<h1 className='text-center'>BÀI TẬP SHOES SHOP</h1>
			<i className=" btn fa-solid fa-cart-shopping position-absolute" data-bs-toggle="modal" data-bs-target="#cart" style={{ top: 55, right: 50, fontSize: 25 }} />
			<p className='bg-dark position-absolute m-auto' style={{color:"white",borderRadius:"50%",width:20,height:20,top: 55, right: 45}}>{sl}</p>
			<ProductList arrayProduct={arrayProduct} handleDetail={handleDetail} handleCart={handleCart} handleQuantity={handleQuantity} />

			{/* <!-- Modal Detail --> */}
			<div className="modal  fade" id="detail" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Chi tiết sản phẩm</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<div className="row align-items-center">
								<div className="col-4">
									<img src={detailItem.image} className='img-fluid' alt="..." />
								</div>
								<div className="col-8 text-start">
									<p className='fw-bold'>{detailItem.name}</p>
									<p className='fw-bold'>{detailItem.price} $</p>
									<p>{detailItem.description}</p>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal Cart --> */}
			<div className="modal  fade" id="cart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							{cartItem.length ? (
							<table className="table">
								<thead className='table-danger'>
									<tr>
										<th className='border border-danger border-2'>STT</th>
										<th className='border border-danger border-2'>Mã SP</th>
										<th className='border border-danger border-2'>Tên SP</th>
										<th className='border border-danger border-2'>Hình ảnh</th>
										<th className='border border-danger border-2'>Số lượng</th>
										<th className='border border-danger border-2'>Thành tiền</th>
										<th className='border border-danger border-2'><button className='btn btn-danger' onClick={()=>{handleDel(0)}}>Del All</button></th>
									</tr>
								</thead>
								<tbody>
									{
										cartItem.map((product,index)=><Cart product={product} index={index} key={index+1} handleQuantity={handleQuantity} handleDel={handleDel} />)
									}
								</tbody>
							</table>) : <p className='fw-bold'>Không có sản phẩm mà coi cái gì!!!</p>}
						</div>
						<div className="modal-footer">
							<p className={display} style={{fontWeight:"bold"}}>Tổng tiền: {tongtien} $</p>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default BTShoesShop