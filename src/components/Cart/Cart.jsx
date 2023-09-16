
import './Cart.css'

const Cart = ({course, handleSelect}) => {
    // console.log(course)
    return (
        <div>

            <div className='card h-[400px] bg-white shadow-xl space-y-3'>
                <div className='card-image mb-4'>
                    <img src={course.cover} alt="" />
                </div>
                <p className='text-xl font-medium mb-4 h-12'>{course.title}</p>
                <p className='font-normal text-start text-sm h-16'>{course.description}</p>
                <div className='flex justify-between mb-3'>
                    <p> <span><i class="fa-solid fa-dollar-sign"></i></span> Price: {course.price}</p>
                    <p> <span> <i class="fa-solid fa-book-open"></i></span> Credit: {course.credit}hr</p>
                </div>
                <button onClick={()=>handleSelect(course)} className='bg-blue-700 w-full rounded-md text-white ' >Select</button>
            </div>


        </div>
    );
};

export default Cart;