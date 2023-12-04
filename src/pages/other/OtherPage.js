import React from 'react'
import { Link } from 'react-router-dom'
import OurWork from '../../components/user/OurWork'

const OtherPage = () => {
  return (
    <div>
      OtherPage
      <br />
      <Link to="/admin">admin page</Link>

      <OurWork />

    </div>
  )
}

export default OtherPage