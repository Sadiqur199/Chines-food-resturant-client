import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import GoogleLogin from '../../Component/GoogleLogin/GoogleLogin';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const Login = () => {

  const captchaRef = useRef(null)
  const [disable, setDisable] = useState(true)
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
  }

  const handelValidate = (e) => {
    const user_captcha_value = e.target.value
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
  }

  return (
    <>
      <Helmet>
      <title>Chines Food  | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl ml-20 font-bold">Login now!</h1>
            <img className='mr-5' src={loginImg} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handelValidate} ref={captchaRef} type="text" name='captcha' placeholder="type the captcha" className="input input-bordered" />
                <button className="btn btn-xs mt-3">Validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disable} className="btn btn-primary" type="submit" value="login" />
              </div>
            </form>
            <p className='text-center pb-5 text-sky-500'><small className='text-red-500'>New Here?</small> <Link to="/registration">Create A Account</Link> </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
