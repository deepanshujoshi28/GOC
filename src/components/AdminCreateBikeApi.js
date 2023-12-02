import React from 'react'

const AdminCreateBikeApi = () => {
    return (
        <div>
            <div className='bike-mode-create-api'>
                <div className='bike-m-c-api'>
                    <div className='bike-m-ca-head'>
                        <div className='bike-m-ca-heading-1'>Welcome to <span> <i class="fa-solid fa-screwdriver-wrench"></i></span> Garage On Call</div>

                        <div className='bike-m-ca-heading-2'>Create Bike Brand and Model Api</div>
                    </div>
                    <div className='bike-m-ca-form'>
                        <form>
                            <label>Brand</label>
                            <input required type='text' placeholder='Brand Name' />
                            <label>Model </label>
                            <input required type='text' placeholder='add all model' />
                            <div>
                                <input required type='checkbox' />
                                 
                            </div>

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