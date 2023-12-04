import React from 'react'
import { Link } from 'react-router-dom'

const AdminBikeApiComponent = () => {
    return (
        <div>

            <div className='bike-mode-create-api'>
                <div className='bike-m-c-api'>
                    <div className='bike-m-ca-head'>
                        {/* <div className='bike-m-ca-heading-1'>Welcome to <span> <i class="fa-solid fa-screwdriver-wrench"></i></span> Garage On Call</div> */}
                        <div className='bike-m-ca-heading-1'> <span>Create <i class="fa-solid fa-motorcycle"></i> </span> API</div>

                        <div className='bike-m-ca-heading-2'>Create Bike Brand and Model Api</div>
                    </div>
                    <div className='bike-m-ca-form'>
                        <form>
                            <label>Add new brand </label>
                            <input required type='text' placeholder='Brand Name' />
                            <br />
                            <label>Add new model </label>
                            <textarea placeholder='Add all models in array format. Example - ["model-1", "model-2", "model-3"]' />
                            {/* <input required type='text' placeholder='add all model' /> */}
                            <div>
                                <input required type='checkbox' /> add model in array format
                                <br />
                                <input required type='checkbox' /> Check Before Submit

                            </div>

                            <button>Create New Brand & Model</button>
                        </form>
                    </div>

                    {/* <div className='bike-m-ca-head'></div> */}


                </div>

            </div>

            <br />
            <br />
            <br />
            <br />


            <div className=''>
                <div className='bike-m-ca-heading-1'> <span> Update <i class="fa-solid fa-motorcycle"></i> </span> API</div>
                <div className='bike-m-ca-heading-2'>Update Bike Brand and Model Api</div>

                <div className='bike-update-api-list'>

                    <div className='bike-u-api-list-1'>
                        <div className='bike-u-a-brand'>Brand name</div>
                        <div className='bike-u-a-model'>
                            <ul>
                                <li>model-1</li>
                                <li>model-2</li>
                                <li>model-3</li>
                                <li>model-4</li>
                            </ul>
                        </div>
                        <div><Link><i class="fa-solid fa-pen"></i> edit</Link></div>
                    </div>


                    <div className='bike-u-api-list-1'>
                        <div className='bike-u-a-brand'>Brand name</div>
                        <div className='bike-u-a-model'>
                            <ul>
                                <li>model-1</li>
                                <li>model-2</li>
                                <li>model-3</li>
                                <li>model-4</li>
                            </ul>
                        </div>
                        <div><Link><i class="fa-solid fa-pen"></i> edit</Link></div>
                    </div>


                    <div className='bike-u-api-list-1'>
                        <div className='bike-u-a-brand'>Brand name</div>
                        <div className='bike-u-a-model'>
                            <ul>
                                <li>model-1</li>
                                <li>model-2</li>
                                <li>model-3</li>
                                <li>model-4</li>
                            </ul>
                        </div>
                        <div><Link><i class="fa-solid fa-pen"></i> edit</Link></div>
                    </div>


                    <div className='bike-u-api-list-1'>
                        <div className='bike-u-a-brand'>Brand name</div>
                        <div className='bike-u-a-model'>
                            <ul>
                                <li>model-1</li>
                                <li>model-2</li>
                                <li>model-3</li>
                                <li>model-4</li>
                            </ul>
                        </div>
                        <div><Link><i class="fa-solid fa-pen"></i> edit</Link></div>
                    </div>

                   

                </div>

            </div>


        </div>
    )
}

export default AdminBikeApiComponent