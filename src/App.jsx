import './App.css';
import Header from "./components/Header/Header.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CourseInvoice from "./components/CourseInvoice/CourseInvoice.jsx";
import {useState} from "react";

function App() {
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [courseCredit, setCourseCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0);
    const [price, setPrice] = useState(0);


    // After Select code handler
    const handleCourseSelect = (course) => {
        // Set new selected course
        const newSelectedCourse = [...selectedCourse, course]
        if (courseCredit >= 20) {
            console.log("Over Credit");
        } else {
            setSelectedCourse(newSelectedCourse);
        }

        // Plus Course Credit
        const newCredit = courseCredit + Number(course.course_credit);
        if (newCredit > 20) {
            console.log("Over");
        } else {
            setCourseCredit(Number(newCredit));
        }

        // Remaining Hour Condition
        const remainingHour = 20 - courseCredit;

        if (remainingHour < 0) {
            console.log("Less than zero remaining")
        } else {
            setRemainingCredit(Number(remainingHour));
        }

        // Plus Price
        const newPrice = parseFloat(price) + parseFloat(course.price);
        setPrice(newPrice.toFixed(2));

    }

    console.log(remainingCredit)


    return (
        <main className='max-w-6xl mx-auto p-4'>
            <Header/>
            <section className='flex justify-between'>
                <Courses handleCourseSelect={handleCourseSelect}/>
                <CourseInvoice selectedCourse={selectedCourse} courseCredit={courseCredit} remainingCredit={remainingCredit} price={price}/>
            </section>
        </main>
    )
}

export default App;
