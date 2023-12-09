import React from 'react'
import img from '../../images/blog-img.jpg'
import blog1 from '../../images/Blog1.jpg'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/Blog3.jpg'
import blog4 from '../../images/Corona_awareness.jpg'



import img1 from '../../images/blog-img-1.jpg'
import { Link } from 'react-router-dom'

const BlogComponent = () => {
    return (
        <div>

            <div className='blog-page'>

                <div className='blog-page-col-1'>
                    <div className='b-p-c1-h1'>Read Our <span> latest  <br />blog </span>and <span>articles</span> <br />and get <span> updated</span></div>

                </div>

                <div className='blog-page-col-2'>
                    <div className='b-p-c2-head'>
                        <div className='b-p-c2-h1'>Our latest <span>blog</span> and <span>articles</span> </div>
                        <div className='b-p-c2-h2'>Welcome to <span><i class="fa-solid fa-screwdriver-wrench"></i></span>  Garage On Call</div>

                    </div>


                    {/*  ----------------------------  all blog and artic.. ------------------------ */}



                    <div className='s-b-col-1'>
                        <div className='s-b-c-head'>
                            <div className='s-b-c-h-h-1'>Bike servicing – why is it necessary</div>
                            <div className='s-b-c-h-h-2'>
                                <div><i class="fa-solid fa-user"></i> ADMIN</div>
                                <div><i class="fa-solid fa-calendar-days"></i> February 18, 2020</div>
                            </div>

                        </div>
                        <div className='s-b-c-img'><img src={blog2} /></div>
                        <div className='s-b-c-para'>
                            <div className='s-b-c-p-h'>The Importance Of Bike Servicing</div>
                            <div className='s-b-c-p-t'>
                                For the smooth running, longevity and safety of your bike, regular checks should be carried out to ensure it’s running correctly. The harsh
                                <div className='b-p-rm-button'><Link target='_blank' to="/porsche-cayenne-coupe-launched-in-india">Read More....</Link></div>
                            </div>



                        </div>

                    </div>


                    {/* --------------------------------- end --------------------------- */}


                    {/* ------------ tips ------------------ */}




                    <div className='s-b-col-1'>
                        <div className='s-b-c-head'>
                            <div className='s-b-c-h-h-1'>Tips for excellent bike health</div>
                            <div className='s-b-c-h-h-2'>
                                <div><i class="fa-solid fa-user"></i> ADMIN</div>
                                <div><i class="fa-solid fa-calendar-days"></i> February 17, 2020</div>
                            </div>

                        </div>
                        <div className='s-b-c-img'><img src={blog3} /></div>
                        <div className='s-b-c-para'>

                            <div className='s-b-c-p-h'>Tyres</div>
                            <div className='s-b-c-p-t'>
                                Regularly check tyre condition and air pressure. Ensure tyre pressures are maintained at manufacturer recommended levels. Check your tyres for cuts and scrapes on your tires, which could cause a blowout. Also check the tyre treads once a week and have the wheels balanced and the alignment checked if the wear is uneven.
                                <div className='b-p-rm-button'><Link target='_blank' to="/tata-hexa-offering-benefits-upto-₹-2-2-lakh">Read More....</Link></div>

                            </div>



                        </div>

                    </div>


                    {/* --------------------------------- end --------------------------- */}



                    {/* ----------------------------- Benefits -------------------------- */}

                    <div className='s-b-col-1'>
                        <div className='s-b-c-head'>
                            <div className='s-b-c-h-h-1'>Benefits of availing doorstep bike repairing and servicing.</div>
                            <div className='s-b-c-h-h-2'>
                                <div><i class="fa-solid fa-user"></i> ADMIN</div>
                                <div><i class="fa-solid fa-calendar-days"></i> February 19, 2020</div>
                            </div>

                        </div>
                        <div className='s-b-c-img'><img src={blog1} /></div>
                        <div className='s-b-c-para'>

                            <div className='s-b-c-p-h'>
                                Experts know how to do it the best way
                            </div>
                            <div className='s-b-c-p-h'>
                                Your vehicle needs constant care
                            </div>
                            <div className='b-p-rm-button'><Link target='_blank' to="/renault-sells-over-18000-units-with-the-triber-mpv-in-india">Read More....</Link></div>



                        </div>

                    </div>



                    {/* --------------------------------- end --------------------------- */}



                    {/* ----------------------------- Corona -------------------------- */}




                    <div className='s-b-col-1'>
                        <div className='s-b-c-head'>
                            <div className='s-b-c-h-h-1'>Corona LOCK DOWN.. Here are the tips by Garage on Call to Keep your Bike Healthy</div>
                            <div className='s-b-c-h-h-2'>
                                <div><i class="fa-solid fa-user"></i> ADMIN</div>
                                <div><i class="fa-solid fa-calendar-days"></i> April 7, 2020</div>
                            </div>

                        </div>
                        <div className='s-b-c-img'><img src={blog4} /></div>
                        <div className='s-b-c-para'>
                            <div className='s-b-c-p-h'>
                                bike in Garage (not using) Due to CORONA Lock Down? Here are the tips from Garage on Call experts to Keep your Bike Healthy Start the bike once in two weeks and take it around for

                                <div className='b-p-rm-button'><Link target='_blank' to="/corona-blog">Read More....</Link></div>

                            </div>




                        </div>

                    </div>




                    {/* --------------------------------- end --------------------------- */}

                </div>







                <div className=''></div>


                {/* <div className='blog-main'>
    <div className='blog-head'>Our <span>latest</span> <br />blog and articles</div>
    <div className='blog-content'>

        <div className='blog-c-col'>
            <img src={img} />
        <div className='blog-c-c-text'>

            <div className='blog-title'>Article tittle</div>
            <div className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus porro repudiandae id harum amet? Doloremque laborum at cumque suscipit! <Link > read more..</Link></div>
            <hr/>
            <div className='blog-end'>
                <div className='blog-end-1'>Full Name</div>
                <div className='blog-end-2'><i class="fa-solid fa-calendar"></i> Fri, 24 Nov 2023</div>

            </div>
        </div>
        </div>

        
        <div className='blog-c-col'>
            <img src={img1} />
        <div className='blog-c-c-text'>

            <div className='blog-title'>Article tittle</div>
            <div className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus porro repudiandae id harum amet? Doloremque laborum at cumque suscipit! <Link > read more..</Link></div>
            <hr/>
            <div className='blog-end'>
                <div className='blog-end-1'>Full Name</div>
                <div className='blog-end-2'><i class="fa-solid fa-calendar"></i> Fri, 24 Nov 2023</div>

            </div>
        </div>
        </div>


        <div className='blog-c-col'>
            <img src={img} />
        <div className='blog-c-c-text'>

            <div className='blog-title'>Article tittle</div>
            <div className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus porro repudiandae id harum amet? Doloremque laborum at cumque suscipit! <Link > read more..</Link></div>
            <hr/>
            <div className='blog-end'>
                <div className='blog-end-1'>Full Name</div>
                <div className='blog-end-2'><i class="fa-solid fa-calendar"></i> Fri, 24 Nov 2023</div>

            </div>
        </div>
        </div>

        
        <div className='blog-c-col'>
            <img src={img1} />
        <div className='blog-c-c-text'>

            <div className='blog-title'>Article tittle</div>
            <div className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus porro repudiandae id harum amet? Doloremque laborum at cumque suscipit! <Link > read more..</Link></div>
            <hr/>
            <div className='blog-end'>
                <div className='blog-end-1'>Full Name</div>
                <div className='blog-end-2'><i class="fa-solid fa-calendar"></i> Fri, 24 Nov 2023</div>

            </div>
        </div>
        </div>

        <div className='blog-c-col'>
            <img src={img} />
        <div className='blog-c-c-text'>

            <div className='blog-title'>Article tittle</div>
            <div className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus porro repudiandae id harum amet? Doloremque laborum at cumque suscipit! <Link > read more..</Link></div>
            <hr/>
            <div className='blog-end'>
                <div className='blog-end-1'>Full Name</div>
                <div className='blog-end-2'><i class="fa-solid fa-calendar"></i> Fri, 24 Nov 2023</div>

            </div>
        </div>
        </div>

        
        <div className='blog-c-col'>
            <img src={img1} />
        <div className='blog-c-c-text'>

            <div className='blog-title'>Article tittle</div>
            <div className='blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus porro repudiandae id harum amet? Doloremque laborum at cumque suscipit! <Link > read more..</Link></div>
            <hr/>
            <div className='blog-end'>
                <div className='blog-end-1'>Full Name</div>
                <div className='blog-end-2'><i class="fa-solid fa-calendar"></i> Fri, 24 Nov 2023</div>

            </div>
        </div>
        </div>

        
        


    </div>
</div> */}

            </div>


        </div>
    )
}

export default BlogComponent