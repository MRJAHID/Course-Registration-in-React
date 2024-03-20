import PropTypes from 'prop-types';

const CourseInvoice = props => {
    return (
        <div className='md:w-1/4 bg-white my-3 ml-3 mr-1 p-4 rounded'>
            <h2 className='text-left font-bold text-blue-600 text-lg mb-2'>Credit Hour Remaining <span>7</span> hr</h2>
            <hr/>
            <div className='text-left mb-3'>
                <h3 className='font-bold text-gray-900 text-lg my-2'>Course Name</h3>
                <ol>
                    <li className='text-gray-700'><span>1</span>: Introduction to OOP Lecture</li>
                    <li className='text-gray-700'><span>1</span>: Introduction to OOP Lecture</li>
                    <li className='text-gray-700'><span>1</span>: Introduction to OOP Lecture</li>
                </ol>
            </div>
            <hr/>
            <h4 className='text-left text-gray-800 my-2'>Total Credit Hour: <span>13</span></h4>
            <hr/>
            <h4 className='text-left text-gray-800  my-2'>Total Price: <span>2300</span> USD</h4>
            <hr/>
        </div>
    );
};

CourseInvoice.propTypes = {};

export default CourseInvoice;
