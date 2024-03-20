import './App.css';
import Header from "./components/Header/Header.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CourseInvoice from "./components/CourseInvoice/CourseInvoice.jsx";

function App() {

    return (
        <main className='max-w-6xl mx-auto p-4'>
            <Header/>
            <section className='flex justify-between'>
                <Courses/>
                <CourseInvoice/>
            </section>
        </main>
    )
}

export default App;
