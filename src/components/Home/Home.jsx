import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import Card from '../Card/Card';


const Home = () => {

    const [courses, setCourses] = useState([])
    const [selected, setSelected] = useState([])


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


console.log(selected)
const handleSelect = (course) =>{
    console.log(course)
    const isExist = courses.find((item) => item.id === course.id);
    if(isExist){   
        setSelected([...selected, course])
       
    }else{
        return alert('already taken')
      
    }

    // let cost = actor.salary;

    // if (isExist) {
    //   return alert("already booked");
    // } else {
    //   courses.forEach((item) => {
    //     cost = cost + item.salary;
    //   });
    //   const remaining = 20000 - cost;
    //   if (cost > 20000) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //       footer: '<a href="">Why do I have this issue?</a>',
    //     });
    //   } else {
    //     setRemaining(remaining);

    //     setTotalCost(cost);

    //     courses([...courses, course]);
    //   }
    // }
}



    return (
        <div className='section'>
            <h1 className='text-4xl mb-12'>Course Registration</h1>
            <div className=' main-container flex gap-3 justify-center'>
                <div className='card-container w-3/4'>
                    <div className='grid grid-cols-3 gap-4 '>
                        {
                            courses.map(course => <Cart key={course.id} course={course} handleSelect={handleSelect}></Cart>)
                        }
                    </div>
                </div>

                <div className='cart w-1/4 bg-white shadow-xl '>
                    <p>This is cart</p>
                    <div>
                        {
                            selected.map(course => (<Card key ={course.id} course={course}></Card>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;