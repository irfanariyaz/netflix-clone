import React from 'react'
import { useState,useEffect } from 'react'
import "./profileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

import {auth} from "../firebase"



function ProfileScreen() {
    const user= useSelector(selectUser)
  
    let [plan,setPlan]= useState(false)
   
    // console.log('URLDETAILS',urlDetails)
    
        // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query.get('plan'))
    useEffect(()=>{
    if (query.get('plan')){
        setPlan(true)}
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[plan]);

  return (

    
  <div className='profileScreen'>
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans(Current Plan:   <span className='planSpan'>  {plan? query.get('plan') : "no plan"}</span>)</h3>
                        <section>
                            <div className="product">
                                <div className="description">
                                    <h3>Basic</h3>
                                    <h5>$9.99</h5>
                                </div>
                                <form action="/create-checkout-session" method="POST">
                                    {/* Add a hidden field with the lookup_key of your Price */}
                                    <input type="hidden" name="lookup_key" value="4243"/>
                                    <button className="profilescreenButton" id="checkout-and-portal-button" type="submit">
                                    Subscribe
                                    </button>
                                </form>                                
                            </div>
                            <div className="product">
                                <div className="description">
                                    <h3>Standard</h3>
                                    <h5>$14.89</h5>
                                </div>
                                <form action="/create-checkout-session" method="POST">
                                    {/* Add a hidden field with the lookup_key of your Price */}
                                    <input type="hidden" name="lookup_key" value="4244" />
                                    <button className="profilescreenButton" id="checkout-and-portal-button" type="submit">
                                    Subscribe
                                    </button>
                                </form>                                
                            </div>
                            <div className="product">
                                <div className="description">
                                    <h3>PREMIUM</h3>
                                    <h5>$19.99</h5>
                                </div>
                                <form action="/create-checkout-session" method="POST">
                                    {/* Add a hidden field with the lookup_key of your Price */}
                                    <input type="hidden" name="lookup_key" value="4245" />
                                    <button className="profilescreenButton" id="checkout-and-portal-button" type="submit">
                                    Subscribe
                                    </button>
                                </form>                                
                            </div>
                        </section>
                        
                        <button className='profileScreen__signOut' onClick={()=>auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  )
  }
export default ProfileScreen