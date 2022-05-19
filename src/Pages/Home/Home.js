import { Category } from '../../Components/Category/Category'
import './Home.css'
export const Home = () =>{
    return(
        <>
         <div className='image'>
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/sunrise-wakatobi.jpg" />
            </div>
        
        
        <div className='container'>
            <div className='bold-text'>
                <h4>Featured Category</h4>
                <hr />

            </div>

            <Category />
            
            <div className=''>
                <div className='bold-text'>
                <h4>Trending Vedios</h4>
                <hr />

                </div>
                <div className='videos-div'>
                
<div class="card box-shadow-bottom">
    <img src="https://i3.ytimg.com/vi/NUlyJT3RxQA/maxresdefault.jpg" class="img-lg"/>
    <div class="card-body">
        <div class="flex justify-space-between">
            <div class="card-title ">American Tourister</div>
        </div>
        <div class="card-description">This is a new quality bag.</div>
        <div className='card-bottom'>
        <span class="">1M views</span>
            <span>1/2/2022</span>
        </div>
        
    </div>
</div> 
<div class="card box-shadow-bottom">
    <img src="https://i3.ytimg.com/vi/NUlyJT3RxQA/maxresdefault.jpg" class="img-lg"/>
    <div class="card-body">
        <div class="flex justify-space-between">
            <div class="card-title ">American Tourister</div>
        </div>
        <div class="card-description">This is a new quality bag.</div>
        <div className='card-bottom'>
        <span class="">1M views</span>
            <span>1/2/2022</span>
        </div>
        
    </div>
</div> 
<div class="card box-shadow-bottom">
    <img src="https://i3.ytimg.com/vi/NUlyJT3RxQA/maxresdefault.jpg" class="img-lg"/>
    <div class="card-body">
        <div class="flex justify-space-between">
            <div class="card-title ">American Tourister</div>
        </div>
        <div class="card-description">This is a new quality bag.</div>
        <div className='card-bottom'>
        <span class="">1M views</span>
            <span>1/2/2022</span>
        </div>
        
    </div>
</div> 
<div class="card box-shadow-bottom">
    <img src="https://i3.ytimg.com/vi/NUlyJT3RxQA/maxresdefault.jpg" class="img-lg"/>
    <div class="card-body">
        <div class="flex justify-space-between">
            <div class="card-title ">American Tourister</div>
        </div>
        <div class="card-description">This is a new quality bag.</div>
        <div className='card-bottom'>
        <span class="">1M views</span>
            <span>1/2/2022</span>
        </div>
        
    </div>
</div> 
</div>
                   

            </div>
        </div>
        </>
    )
}