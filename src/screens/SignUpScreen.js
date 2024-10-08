import React, { useRef } from 'react'
import { auth } from '../firebase'
import "./signUpScreen.css"


function SignUpScreen() {
  const emailRef= useRef(null)
  const passwordRef= useRef(null)

 
  const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      )
      .then((authUser)=>{
      console.log("user registered",authUser)
      })
      .catch((error)=>{
        alert(error.message)
      })
  }
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value)
      .then((authUser)=>{
        console.log(authUser)
      })
      .catch((error)=>{alert(error.message)})
  }
  return (
    <div className='signUpScreen__login'>
       <h1>Sign In</h1>
       <form className='signUpScreen__form' action="">
        <input ref={emailRef} type="email" placeholder='Email'/>
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <button className='signUpScreen__button'onClick={signIn} type='submit'>Sign In</button>
        <h4><span className="signUpScreen__gray"> New to Netflix?</span>
        <span className='signUpScreen__link' onClick={register}>Sign up now</span></h4>
       </form>
    </div>
  )
}

export default SignUpScreen