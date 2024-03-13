import './App.css'
import Cart from './components/courses/Cart'
import Courses from './components/courses/Index'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center p-5">
        PH Course Registration</h1>
      <div className='grid grid-cols-8 my-4 gap-6 p-6'>
        <div className='col-span-6'>
          <Courses></Courses>
        </div>
        <div className='col-span-2'>
          <Cart></Cart>
        </div>
      </div>
    </>
  )
}

export default App
