import PropTypes from 'prop-types';
import {IoBookOutline} from "react-icons/io5";


const Course = ({handleCourseSelect, course}) => {

    return (
        <div className='w-full bg-white my-3 md:w-1/3 shadow-lg px-3.5 py-4 rounded'>
            <img className='mb-2' src={course.image} alt='Course Image'/>
            <h2 className='font-normal text-lg text-left mb-3'>{course.course_title}</h2>
            <p className='text-left mb-3 text-gray-800'>{course.details}</p>
            <div className='flex justify-between mb-4'>
                <p className='flex items-center text-gray-800'>$ <span className='ml-2'>Price: <span>{course.price}</span></span>
                </p>
                <p className='flex items-center text-gray-800'><IoBookOutline/> <span
                    className='ml-2'>Credit: <span>{course.course_credit}</span></span></p>
            </div>
            <button onClick={() => handleCourseSelect(course)}
                className="font-semibold text-white w-full rounded py-2 bg-blue-600 hover:bg-green-600 transition ease-in-out delay-150 duration-300">
                Select
            </button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCourseSelect: PropTypes.func,
    index: PropTypes.number,
};

export default Course;
