import React from 'react'
import image1 from './images/blog-image-1.jpg'
import image2 from './images/blog-image-2.jpg'
function Main() {
  return (
    <div>
        <main>
            <article>
                <h2>11/12/20</h2> 
                <h3>On the Street in Brooklyn</h3>
                <img src={image1} alt="image1"/>
                <p class ="p1"><emmet>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum nisi mollitia, delectus dignissimos quisquam, magni molestiae minima maiores alias, repudiandae excepturi at esse laudantium eos veniam maxime eum sequi.</emmet></p>
                <p class="p2" ><strong>Continues...</strong></p>
            </article>
            
            <hr/>
            <article>
                <h2>11/11/20</h2>
                <h3>Vintage in Vogue</h3>
                <img src={image2} alt="image2"/>
                <p class ="p1"><emmet>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum nisi mollitia, delectus dignissimos quisquam, magni molestiae minima maiores alias, repudiandae excepturi at esse laudantium eos veniam maxime eum sequi.</emmet></p>
                <p class="p2" ><strong>Continues...</strong></p>
            </article>
          
            <hr/>

        </main>

    </div>
  )
}

export default Main