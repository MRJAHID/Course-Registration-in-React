import {useEffect, useState} from "react";
import Course from "../Course/Course.jsx";

const Courses = ({handleCourseSelect}) => {
    // State for Blogs
    const [courses, setCourses] = useState([]);

    // Load the Courses Data
    useEffect(() => {
        fetch('course.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='w-full md:w-3/4'>
            <div className='w-full flex flex-wrap'>
                {/* Single Course loop */}
                {
                    courses.map((course, index) => <Course key={index}  handleCourseSelect={handleCourseSelect} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;
