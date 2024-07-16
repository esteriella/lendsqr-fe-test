import React, { useState } from 'react';
import Logo from '../../assets/images/Group.png';
import Pablo from '../../assets/images/pablo-sign-in.png';
import '../../styles/Login.scss';

function Login() {
    // State to manage form fields
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // State to manage validation messages
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    // Function to validate email format
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Reset validation messages
        setEmailError('');
        setPasswordError('');

        // Check if email is valid
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        }

        // Check if password is provided
        if (password.length === 0) {
            setPasswordError('Password is required');
        }

        // Proceed if no validation errors
        if (validateEmail(email) && password.length > 0) {
            // Perform login logic here
            console.log('Form submitted successfully');
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="login-section">
            <div className="form-section">
                <div className="logo-wrapper">
                    <div className="logo-section">
                        <img src={Logo} className="logo" alt="lendsqr logo" />
                    </div>
                    <div className="pablo-img-section">
                        <img src={Pablo} className="pablo-img" alt="pablo sign-in" />
                    </div>
                </div>
                <div className='login-form-section'>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                    <form onSubmit={handleSubmit}>
                        {emailError && <span className="error-message">{emailError}</span>}
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {passwordError && <span className="error-message">{passwordError}</span>}
                        <div className="password-input">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="show-password" onClick={togglePasswordVisibility}>
                                {showPassword ? "hide" : "show"}
                            </span>
                        </div>
                        <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;