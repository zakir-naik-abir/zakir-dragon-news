import React, { useContext, useState } from 'react'
import Navbar from '../Shared/Navbar/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {

  const { user, loginUser, success, setSuccess, error, setError, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate('')
  
  const handlelogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget); 
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)

    loginUser(email, password)
    .then(result =>{
      console.log(result.user)
      setSuccess('Login Successful')
      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.error(error)
      setError('Email or Password incurrect')
    })
  }


    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
          console.log(result.user)
          setSuccess('Login success')
        })
        .catch(error =>{
          console.error(error)
          setError('Login fail. Please try again')
        })
      }
      const handleGithubLogin = () =>{
        githubLogin()
        .then(result =>{
          console.log(result.user)
          setSuccess('Login success')
        })
        .catch(error =>{
          console.error(error)
          setError('Login fail. Please try again')
        })
      }
      const handleFacebookLogin = () =>{
        facebookLogin()
        .then(result =>{
          console.log(result.user)
          setSuccess('Login success')
        })
        .catch(error =>{
          console.error(error)
          setError('Login fail. Please try again')
        })
      }
  

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-gray-400 py-10 p-5 w-[450px]'>
          <h2 className='text-center text-3xl border-b pb-3'>Login your accout</h2>
          <form onSubmit={handlelogin} className=' mt-2'>
            <p>Email address</p>
            <input className='w-full p-2 rounded-sm mb-2' type="email" name='email' placeholder='Enter your email' />
            <p>Your Password</p>
            <input className='w-full p-2 rounded-sm mb-2' type="password" name='password' placeholder='Enter your password' />

              {
                success && 
                <small>{success}</small>
              }
              {
                error && 
                <small>{error}</small>
              }

            <input className='w-full btn btn-primary mt-2' type="submit" name='submit' value='LogIn' />
          </form>
          <p className='text-center mt-2 font-semibold'>Don't have an account? <NavLink className='text-blue-800' to={'/signup'}>Register Now</NavLink></p>
          
          <div className='flex justify-around mt-3'>
            <button onClick={handleGoogleLogin} className="btn btn-outline ">
              <FaGoogle></FaGoogle>
              Google
            </button>
            <button onClick={handleGithubLogin} className="btn btn-outline ">
              <FaGithub></FaGithub>
              Github
            </button>
            <button onClick={handleFacebookLogin} className="btn btn-outline ">
              <FaFacebook></FaFacebook>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;