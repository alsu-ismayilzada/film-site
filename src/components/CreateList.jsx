import React from 'react'
import "../CreateList.css"

const CreateList = () => {
  return (
    <div className='create-list'>
      <input type="text" />
      <button className='saveBtn'>Save</button>
      <button className='goBtn'>Go to Basket</button>
    </div>
  )
}

export default CreateList