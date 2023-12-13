import React, { useState } from 'react'

const Other = () => {

  
  const [num, setNum] = useState('');

  const limit = 10;
  const handleNumChange = event => {
      setNum(event.target.value.slice(0, limit));
  };
  
  
  return (
    <div>
    <div>
      <input 
      type="number"
      value={num}
      onChange={handleNumChange}
      placeholder="Number input"
      />
    </div>
    <div></div>
    <div>Other</div>

    </div>
  )
}

export default Other