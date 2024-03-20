import PropTypes from 'prop-types';

const CourseInvoice = ({selectedCourse, courseCredit, remainingCredit, price}) => {
    return (
        <div className='md:w-1/4 bg-white my-3 ml-3 mr-1 p-4 rounded'>
            <h2 className='text-left font-bold text-blue-600 text-lg mb-2'>Credit Hour Remaining <span>{remainingCredit}</span> hr</h2>
            <hr/>
            <div className='text-left mb-3'>
                <h3 className='font-bold text-gray-900 text-lg my-2'>Course Name</h3>
                <ol>
                    {/* Selected Course List Single*/}
                    {
                        selectedCourse.map((item, idx) => <li key={idx} className='text-gray-700'><span>{idx + 1}</span>: {item.course_title}</li>)
                    }
                </ol>
            </div>
            <hr/>
            <h4 className='text-left text-gray-800 my-2'>Total Credit Hour: <span>{courseCredit}</span></h4>
            <hr/>
            <h4 className='text-left text-gray-800  my-2'>Total Price: <span>{price}</span> USD</h4>
            <hr/>
        </div>
    );
};

CourseInvoice.propTypes = {
    selectedCourse: PropTypes.array,
    courseCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
};

export default CourseInvoice;
