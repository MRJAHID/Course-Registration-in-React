import { IoBookOutline } from "react-icons/io5";
import Rectangle1 from "../../assets/images/Rectangle 2-1.png"
import {useEffect, useState} from "react";
const Courses = () => {
    const [courses, setCourses] = useState([]);

    return (
        <div className='w-full md:w-3/4'>
            <div className='w-full flex flex-wrap'>
                <div className='w-full bg-white my-3 md:w-1/3 shadow-lg px-3.5 py-4 rounded'>
                    <img className='mb-2' src={Rectangle1} alt='Course Image'/>
                    <h2 className='font-normal text-lg text-left mb-3'>Introduction to OOP Lecture</h2>
                    <p className='text-left mb-3 text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur.
                    </p>
                    <div className='flex justify-between mb-4'>
                        <p className='flex items-center text-gray-800'>$ <span className='ml-2'>Price: <span>400</span></span></p>
                        <p className='flex items-center text-gray-800'><IoBookOutline /> <span className='ml-2'>Credit: <span>2</span></span></p>
                    </div>
                    <button className="font-semibold text-white w-full rounded py-2 bg-blue-600 hover:bg-green-600 transition ease-in-out delay-150 duration-300" >
                        Select
                    </button>
                </div>
                <div className='w-full bg-white my-3 md:w-1/3 shadow-lg px-3.5 py-4 rounded'>
                    <img className='mb-2' src={Rectangle1} alt='Course Image'/>
                    <h2 className='font-normal text-lg text-left mb-3'>Introduction to OOP Lecture</h2>
                    <p className='text-left mb-3 text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur.
                    </p>
                    <div className='flex justify-between mb-4'>
                        <p className='flex items-center text-gray-800'>$ <span className='ml-2'>Price: <span>400</span></span></p>
                        <p className='flex items-center text-gray-800'><IoBookOutline /> <span className='ml-2'>Credit: <span>2</span></span></p>
                    </div>
                    <button className="font-semibold text-white w-full rounded py-2 bg-blue-600 hover:bg-green-600 transition ease-in-out delay-150 duration-300" >
                        Select
                    </button>
                </div>
                <div className='w-full bg-white my-3 md:w-1/3 shadow-lg px-3.5 py-4 rounded'>
                    <img className='mb-2' src={Rectangle1} alt='Course Image'/>
                    <h2 className='font-normal text-lg text-left mb-3'>Introduction to OOP Lecture</h2>
                    <p className='text-left mb-3 text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur.
                    </p>
                    <div className='flex justify-between mb-4'>
                        <p className='flex items-center text-gray-800'>$ <span className='ml-2'>Price: <span>400</span></span></p>
                        <p className='flex items-center text-gray-800'><IoBookOutline /> <span className='ml-2'>Credit: <span>2</span></span></p>
                    </div>
                    <button className="font-semibold text-white w-full rounded py-2 bg-blue-600 hover:bg-green-600 transition ease-in-out delay-150 duration-300" >
                        Select
                    </button>
                </div>
                <div className='w-full bg-white my-3 md:w-1/3 shadow-lg px-3.5 py-4 rounded'>
                    <img className='mb-2' src={Rectangle1} alt='Course Image'/>
                    <h2 className='font-normal text-lg text-left mb-3'>Introduction to OOP Lecture</h2>
                    <p className='text-left mb-3 text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur.
                    </p>
                    <div className='flex justify-between mb-4'>
                        <p className='flex items-center text-gray-800'>$ <span className='ml-2'>Price: <span>400</span></span></p>
                        <p className='flex items-center text-gray-800'><IoBookOutline /> <span className='ml-2'>Credit: <span>2</span></span></p>
                    </div>
                    <button className="font-semibold text-white w-full rounded py-2 bg-blue-600 hover:bg-green-600 transition ease-in-out delay-150 duration-300" >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
