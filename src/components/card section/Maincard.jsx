import React, { useEffect, useState } from 'react'

import Card from './card'
import Axios from 'axios'
import Loading from './Loading'


const Maincard = () => {

const [AllCards,SetALlCards] = useState([])
const [Loader,SetLoader] = useState(false)



const FetchMyData=async()=>{



  SetLoader(true)

Axios.get('https://dummyjson.com/products')
.then((res)=>{
  SetALlCards(res.data.products)

}).catch((err)=>{
console.log(err)
})
SetLoader(false)

}


useEffect(()=>{
  FetchMyData()
},[])

  return (

 <>
 
 {Loader ? <Loading/>
:
<div className='w-full flex h-screen overflow-y-scroll gap-6 flex-wrap justify-evenly items-center'>

{ AllCards && AllCards.map((ele)=>   <Card key={ele._id} title={ele.title} Desc={ele.description} Price={ele.price
}/> )
}

    

    </div>


 }
 
 </>
    
  


  )
}

export default Maincard