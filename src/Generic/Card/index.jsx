import React from 'react'
import { Wrapper } from './style'
 
function Card({title,image}) {
  return (
    <Wrapper>
      <Wrapper.Title>{title}</Wrapper.Title>

      <Wrapper.Image src={image} alt="Not found"/>
    </Wrapper>
  )
}

export default Card
