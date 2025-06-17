import { useForm} from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const { register,handleSubmit,reset,formState: { errors } } = useForm();
  const navigate = useNavigate();
  const submitHandler = (data) =>{
     reset();
     navigate("/content")
     toast.success("logged in successfully")
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)} className='absolute p-5 top-0 left-2/5 w-[375px] h-screen bg-[#F7F8F9] opacity-100 '>
       <h1 className="text-3xl font-bold font-[Rubik] mb-2">Signin to your <br /> PopX account</h1>
       <p className="font-extralight opacity-60 mb-3">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
      <div className='relative mb-5'>
       <input 
      {...register("email",{required:true})}
          type="email"
         id="floating_outlined" 
         className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
       <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Email Address
        </label> 
        {errors.email && <small className="text-red-400">email should not be empty</small>}
      </div>
      <div className='relative mb-5'>
       <input type="password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
       <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Password
        </label> 
        {errors.password && <small className="text-red-400">email should not be empty</small>}
      </div>


       <button className='bg-blue-400 rounded-md h-10 w-full text-white text-lg flex items-center justify-center hover:cursor-pointer  active:scale-105'> 
               Login
       </button>
      </form>
  )
}

export default Login