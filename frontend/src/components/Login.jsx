import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Login = () => {
    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />

                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} width="130px" alt='logo' />
                    </div>

                    <div className='shadow-2xl'>
                        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
                            <GoogleLogin
                                render={(renderProps) => (
                                    <button
                                        type='button'
                                        className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <FcGoogle className='mr-4' /> Sign in with Google
                                    </button>

                                )}
                                onSuccess={responseGoogle}
                                onError={responseGoogle}
                                cookiesPolicy='single_host_origin'
                            />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login