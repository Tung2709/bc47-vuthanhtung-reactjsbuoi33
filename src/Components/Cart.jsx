import React from 'react'

const Cart = ({product,index,handleQuantity,handleDel}) => {
  return (
    <tr className="table table-info table-striped">
    <td className='border border-info border-2'>{index + 1}</td>
    <td className='border border-info border-2'>{product.id}</td>
    <td className='border border-info border-2'>{product.name}</td>
    <td className='border border-info border-2'>
      <img src={product.image} style={{ width: 80, height: 80 }} alt="..." /></td>
    <td className='border border-info border-2'>
      <button className='btn btn-outline-info' onClick={()=>{handleQuantity(product.id,1)}}>+</button>
      <span className='mx-2'>
        {product.soLuong}
      </span>
      <button className='btn btn-outline-info' onClick={()=>{handleQuantity(product.id,-1)}}>-</button>
    </td>
    <td className='border border-info border-2'>{product.soLuong * product.price} $</td>
    <td className='border border-info border-2'><button className='btn btn-danger' onClick={()=>{handleDel(product.id)}}>X</button></td>
  </tr>
  )
}

export default Cart