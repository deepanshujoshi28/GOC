import React, { useState } from 'react'

const Other = () => {
  const [value, setValue] = useState('114');
      const handleChange = (event) => { setValue(event.target.value) };
      const error = (value < 10 ) ? 'Value must be between 10 and 20.' : '';
    
  return (
    <div>
      <div className="container">
          <h3>React Js Input Field Min Max Validation</h3>
          <label>
            Enter a Number:
            <input
              type="text"
              value={value}
              onChange={handleChange}
            />
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    </div>
  )
}

export default Other