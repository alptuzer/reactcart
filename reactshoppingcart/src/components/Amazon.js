import React from 'react'
import '../styles/amazon.css'
import list from '../data.js'
import Cards from '../components/Card.js'
export default function amazon({handleClick}) {
    return (
      <section>
        {list.map((item) => (
          <Cards key={item.id} item={item}  handleClick={handleClick} />
        ))}
      </section>
    );
  }
