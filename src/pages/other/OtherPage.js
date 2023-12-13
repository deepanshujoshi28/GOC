import React, { useState } from 'react'
import BlogBenefits from '../../components/user/SingleBlogs/BlogBenefits'
import OtherAA from '../../components/other/OtherAA'
import Other from '../../components/other/Other'

const OtherPage = () => {
  // const [user, setUser] = useState({
  //   first: "", second: ""
  // })

  // let name, value;

  // const handleInputs = (e) => {
  //   console.log(e)
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({... user, [name]: value })
  // }


  // const PostData = async (e) => {
  //   e.preventDefault();

  //   const { first , second } = user;

  // }


  return (
    <div>
      {/* <BlogBenefits/> */}

      {/* <form method='POST'>
        <input placeholder='first' name='first'
          value={user.first}
          onChange={handleInputs}
        />
        <input placeholder='second' name='second'
          value={user.second}
          onChange={handleInputs}
        />
        <button onClick={PostData}>submit</button>
      </form> */}
<Other/>
      {/* <OtherAA /> */}


    </div>
  )
}

export default OtherPage