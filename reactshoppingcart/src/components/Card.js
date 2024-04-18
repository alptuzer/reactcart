import React from 'react'

export default function Card({item,handleClick}) {

    const {id,title , author , price ,img} = item
  return (
    <div className='cards'>
    <div className='image_box'>
        <img src={img} alt={title} />
    </div>
    <div className='details'>
        <p>{title}</p>
        <p>{id}</p>
        <p>{author}</p>
        <p>{price} TL</p>
        <button onClick={()=> handleClick(item)}>Add to Card</button>
    </div>
</div>
  )
}
