import './App.css';
import Header from "./components/Header/Header.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CourseInvoice from "./components/CourseInvoice/CourseInvoice.jsx";

function App() {

    const handleCourseSelect  = (course) => {
        console.log(course)
    }

    return (
        <main className='max-w-6xl mx-auto p-4'>
            <Header/>
            <section className='flex justify-between'>
                <Courses handleCourseSelect={handleCourseSelect}/>
                <CourseInvoice/>
            </section>
        </main>
    )
}

export default App;
