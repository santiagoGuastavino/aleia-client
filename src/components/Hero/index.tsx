import React, { useState, useEffect } from 'react'
import './styles.css'
import { Property } from '../../types'
import { fetchData } from '../../helper/fetchData'
import Item from '../Item'

export default function Hero () {
  const [data, setData] = useState<Property[]>([])

  useEffect(() => {
    fetchData('http://localhost:3001/data', setData)
  }, [])

  return (
    <section className='hero-section'>
      {!data.length
        ? <p>Loading...</p>
        : data.map((item) => (
          <Item
            key={item.id}
            {...item}
          />
        ))
      }
    </section>
  )
}
