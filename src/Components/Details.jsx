import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({data}) => {
    const {id}=useParams()
const item=data.find(el=>el.id==id)
console.log(item)
    // console.log(id)
  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.pic} alt="" />
        <h4>{item.price}</h4>
    </div>
  )
}

export default Details