import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import Card from '../Card/Card';
import Swal from 'sweetalert2';
Swal


const Home = () => {

    const [courses, setCourses] = useState([])
    const [selected, setSelected] = useState([])
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


    console.log(selected)
    const handleSelect = (course) => {
        // console.log(course)
        const isExist = selected.find((item) => item.id === course.id);
        let totalCredit = course.credit;
        if (isExist) {
            return Swal.fire(
                'Already taken',
                'Try another course',
                'warning'
              )
        } else {
            selected.forEach((item) => {
                totalCredit = totalCredit + item.credit;
            });
            const remaining = 20 - totalCredit;
            if (totalCredit > 20) {
                Swal.fire(
                    "Credit isn't available ",
                    '',
                    'warning'
                  )
            } else {
                setRemaining(remaining);

                setTotalCost(totalCredit);

                setSelected([...selected, course]);
            }
        }
    }



    return (
        <div className='section'>
            <h1 className='text-4xl mb-12'>Course Registration</h1>
            <div className=' main-container flex gap-3'>
                <div className='card-container w-3/4'>
                    <div className='grid grid-cols-3 gap-4 '>
                        {
                            courses.map(course => <Cart key={course.id} course={course} handleSelect={handleSelect}></Cart>)
                        }
                    </div>
                </div>

                <div className='cart w-1/4  text-left'>
                    <div className='bg-white shadow-xl  p-5 rounded-xl'>
                        <p className='text-xl text-blue-600 font-bold mb-5'>Credit Hour Remaining {remaining} hr</p>
                        <hr />
                        <p className='font-bold mt-5'>Course Name</p>
                        <div className='mb-5'>
                            {
                                selected.map(course => (<Card key={course.id} course={course}></Card>))
                            }
                        </div>
                        <hr />
                        <p className='font-bold mt-5'>Total Credit Hour : {totalCost}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;