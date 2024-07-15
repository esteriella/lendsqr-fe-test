import React from 'react'
import Logo from '../../assets/images/Group.png'
import Pablo from '../../assets/images/pablo-sign-in 1.png'

function Login() {
    return (
        <section className='login-section'>
            <section className='image-section'>
                <section className='logo-section'>
                    <img src={Logo} className='logo' alt='lendsqr logo' />
                </section>

                <section className='pablo-img-section'>
                    <img src={Pablo} className='pablo-img' alt='image' />
                </section>
            </section>

            <section className="login-form-section">
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="button">Login</button>
            </section>
        </section>
    )
}

export default Login
