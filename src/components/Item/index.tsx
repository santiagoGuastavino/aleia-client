import React from 'react'
import './styles.css'

export default function Item (props: any) {
  console.log(props.id)

  return (
    <article className='item-article'>
      <div>
        <img src={props.img} alt='img' />
      </div>
      <div className='item-text'>
        <p>
          {props.price}
        </p>
        <p>
          {props.address}
        </p>
      </div>
      <div className='item-button'>
        <button>
          View Details +
        </button>
      </div>
    </article>
  )
}
