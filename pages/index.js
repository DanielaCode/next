import React,{useEffect, useState} from 'react'
import NavBar from '../components/NavBar/NavBar'

const index = () => {
  const [productList,setProductList]=useState([])
useEffect(()=>{
  window
  .fetch("/api/avo")
  .then(data=>data.json())
  .then(({data})=>setProductList(data))
},[])
  return (
    <div>
        <NavBar/>
        {productList.map(item=><div key={item.id}>{item.name}</div>)}
    </div>
  )
}

export default index