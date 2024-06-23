import React from 'react'

const Props = ({children , iscompleted}) => {
  return (
    
    <>
    <label htmlFor="#">
      <input type="checkbox" defaultChecked={iscompleted} />
      {children}

    </label>

    
    
    
    </>
  )
} 

export default Props