import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const RightSideNav = () => {
    const {googleLogin, githubLogin, facebookLogin} = useContext(AuthContext);

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
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button onClick={handleGithubLogin} className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
                <button onClick={handleFacebookLogin} className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="https://www.facebook.com/zakir.hasan.abir/?id" target='black'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="https://twitter.com/ZakirNa30867313" target='black'>
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="https://www.instagram.com/zakirnaik_abir/" target='black'>
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Instaram</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;