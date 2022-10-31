import React from 'react'
import "./profileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {auth} from "../firebase"
function ProfileScreen() {
    const user= useSelector(selectUser)
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
                        <h3>Plans(Current Plan: premium)</h3>
                        <section>
                            <div className="product">
                                <div className="description">
                                    <h3>Basic</h3>
                                    <h5>$9.99</h5>
                                </div>
                                <form action="/create-checkout-session" method="POST">
                                    {/* Add a hidden field with the lookup_key of your Price */}
                                    <input type="hidden" name="lookup_key" value="4243" />
                                    <button id="checkout-and-portal-button" type="submit">
                                    Checkout
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
                                    <button id="checkout-and-portal-button" type="submit">
                                    Checkout
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
                                    <button id="checkout-and-portal-button" type="submit">
                                    Checkout
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