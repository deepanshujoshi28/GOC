import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminBooking = () => {

  //--------------------------fetch----------------

  const [book, setBook] = useState([])

  const fetchBooking = async () => {
    const res = await axios.get('http://localhost:2000/home')
    setBook(res.data.data)
    // console.log("res",res.data.data)
  }
  useEffect(() => {
    fetchBooking();
  },[])
    

//   const stat = true;

book.map((e) => {

})
    
    
    return (
        <div>
            <div>AdminBooking</div>
            <div>
                {
                    book.map((e) => {
                        return <div>
                        <Link>{e._id}</Link>
                        <div>{e.phone}</div>
                        <Link  ></Link>

                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default AdminBooking