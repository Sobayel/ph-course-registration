import { useState } from 'react'
import './App.css'
import Cart from './components/courses/Cart'
import Courses from './components/courses/Index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const totalCredits = 15;
function App() {
  const [carts, setCarts] = useState([])

  const handleCourseSelection = (course) => {
    console.log(course);

    const credits = carts.reduce((p, c) => p + c.credit, 0)
    if (credits + course.credit > totalCredits)
      return toast.error(`Only ${totalCredits} Credits Allowed, Sir`)

    const alreadyExists = carts.find(c => c.id == course.id);
    if (alreadyExists) {
      toast.warning("Course Already Selected");
    } else {
      setCarts(c => [...c, course])
      toast.success("Course Added");
    }
  };

  return (
    <>
      <div className='bg-[#F3F3F3]'>
        <h1 className="text-4xl font-bold text-center py-7">
          PH Course Registration</h1>
        <div className='grid grid-cols-8 gap-6 pb-8 px-8'>
          <div className='col-span-6'>
            <Courses handleCourseSelection={handleCourseSelection}></Courses>
          </div>
          <div className='col-span-2'>
            <Cart carts={carts}></Cart>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App
