import React from 'react'
import img from '../../images/blog-img.jpg'
import img1 from '../../images/blog-img-1.jpg'
import { Link } from 'react-router-dom'

const BlogComponent = () => {
  return (
    <div>

<div className='blog'>


<div className='blog-main'>
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
</div>

</div>

        
    </div>
  )
}

export default BlogComponent