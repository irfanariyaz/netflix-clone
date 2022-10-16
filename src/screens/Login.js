import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
import "./login.css"

function Login() {
    const [signIn,setSignIn]= useState(false)
  return (
    <div className='loginscreen'>
   
        <div className="loginscreen__background">
            <img className='loginscreen__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="" />
            <button onClick={()=>setSignIn(true)} className='loginscreen__button'>Sign In</button>
            <div className="loginscreen__gradient"></div>
            <div className="loginscreen__body">
                {signIn ?  (
                    <SignUpScreen />
                    )
                    
                 
               :(<>
                    <h1>Unlimited films, TV programs and more.</h1>
                    <h2>Watch anywhere. Cancel at any time. </h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginscreen__input">
                        <form action="">
                            <input type="email"  placeholder='Email'/>
                            <button onClick={()=>setSignIn(true)}className='loginscreen__getstarted'>GET STARTED</button>
                        </form>
                    </div>
                    </>)}
              
            </div>
        </div>
    </div>
  )
}

export default Login