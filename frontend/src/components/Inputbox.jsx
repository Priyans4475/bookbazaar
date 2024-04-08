import React from 'react'

const Inputbox = ({inputheader,type, placeholder,onchange}) => {
  return (<>
    <div className=' font-bold p-2'>
    <h1 className='font-serif'>{inputheader}</h1>
    </div>
    <div>
    <input onChange={onchange} type={`${type}`} placeholder={`${placeholder}`} className='rounded-lg'/>
    </div>
    </>
  )
}

export default Inputbox