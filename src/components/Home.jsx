import { Link } from 'react-router-dom'

const Home = () => {
  return (
 <div className='absolute p-5 top-0 left-2/5 w-[375px] h-screen bg-[#F7F8F9] opacity-100 '>
         {/* upward box */}
         <div className='h-[80%] w-full flex flex-col justify-end mb-5'>
         <h1 className='text-3xl font-bold font-Rubik'>Welcome to PopX</h1>
        <p className='text-xl leading-6 '>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
        </div>
          
        {/* downward box */}
          <div className='w-full h-[20%] flex flex-col gap-3'>
           <Link to='/register' className='bg-[#6C25FF] rounded-md h-10 text-white text-lg flex items-center justify-center'> 
               Create Account
            </Link>

            <Link to='/login' className='bg-[#6C25FF4B] rounded-md h-10 text-black text-lg flex items-center justify-center'>
                Already Registered? Login
            </Link>

        </div>
       </div>
  )
}

export default Home