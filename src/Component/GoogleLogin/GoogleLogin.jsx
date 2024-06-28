import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';

const GoogleLogin = () => {

  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'


  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch('https://food-resturant-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })
    })
  }


  return (
    <div>
      <div className="divider">OR</div>
      <div className='text-center pb-3'>
        <button onClick={handelGoogleSignIn} className="btn btn-circle bg-zinc-500">
          <FaGoogle></FaGoogle>
        </button>
        {/* <button className="btn btn-circle bg-zinc-500 ml-5">
            <FaGithub></FaGithub>
            </button>
            <button className="btn btn-circle bg-zinc-500 ml-5">
            <FaFacebook></FaFacebook>
            </button> */}
      </div>
    </div>
  );
};

export default GoogleLogin;