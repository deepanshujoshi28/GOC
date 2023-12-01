import React from 'react'

const AdminCreateBikeApi = () => {
  return (
    <div>
       <div className='bike-mode-create-api'>
                <div className='bike-m-c-api'>
                    <div className='bike-m-ca-head'>
                        <div className='bike-m-ca-heading-1'></div>
                    </div>
                    <div className='bike-m-ca-form'>
                        <form>
                            <input required type='text' placeholder='Brand Name'/>
                            <input required type='text' placeholder='add all model'/>
                            <input required type='checkbox'/>
                            <button>Submit Model</button>
                        </form>
                    </div>

                    {/* <div className='bike-m-ca-head'></div> */}


                </div>

            </div>
    </div>
  )
}

export default AdminCreateBikeApi