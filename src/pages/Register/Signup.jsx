import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import { useContext, useState } from "react"
import { AuthContext } from "../../Providers/AuthProvider"


const Signup = () => {

  const {createUser, success, setSuccess, error, setError } = useContext(AuthContext);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate('')

  const handleSignup = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, photo, email, password)

    setSuccess('');
    setError('');
    setEmailError('');
    setPasswordError('');

    if(!/@gmail\.com$/.test(email)){
      setEmailError("Please write a valid email!")
      return;
    }

    if(password.length < 6){
      setPasswordError('Password must be at least 6 characters!')
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setPasswordError('At least 1 uppercase character1')
      return;
    }


    createUser(email,password)
    .then(resut =>{
      console.log(resut.user)
      setSuccess('Registration Successful!')
      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.error(error)
      setError('This email is already use!')
    })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-gray-400 py-10 p-5 w-[450px]'>
          <h2 className='text-center text-3xl border-b pb-3'>Register your accout</h2>
          <form onSubmit={handleSignup} className=' mt-2'>
            <p>Your Name</p>
            <input className='w-full p-2 rounded-sm mb-2' type="text" name='name' placeholder='Enter your name' />

            <p>Photo URL</p>
            <input className='w-full p-2 rounded-sm mb-2' type="text" name='photo' placeholder='Enter your photo url' />
            
            <p>Email address</p>
            <input className='w-full p-2 rounded-sm mb-2' type="email" name='email' placeholder='Enter your email' />
              {
                emailError &&
                <small className="text-red-600">{emailError}</small>
              }

            <p>Your Password</p>
            <input className='w-full p-2 rounded-sm mb-2' type="password" name='password' placeholder='Enter your password' />
              {
                passwordError &&
                <small className="text-red-600 mt-2">{passwordError}</small>
              }
            
            <div className="flex items-center gap-2 ">
              <input type="checkbox" name="checked" id="checked" />
              <p>Accept <a href="#">Term & Conditions</a></p>
            </div>

            {
              success && 
              <small className="text-green-600">{success}</small>
            }
            {
              error && 
              <small className="text-red-600">{error}</small>
            }


            <input className='w-full btn btn-primary mt-2' type="submit" name='submit' value='Sign Up' />
          </form>
          <p className='text-center mt-2 font-semibold'>Already have an account? <NavLink className='text-blue-800' to={'/login'}>Login Now</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;