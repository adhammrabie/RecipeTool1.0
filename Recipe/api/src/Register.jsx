// import React from 'react';
// import './Register.css'
// const Login = () => {
//     return (
//         <div className="login-wrap">
//             <div className="login-html">
//                 <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
//                 <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
//                 <div className="login-form">
//                     <div className="sign-in-htm">
//                         <div className="group">
//                             <label htmlFor="user" className="label">Username</label>
//                             <input id="user" type="text" className="input" />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="pass" className="label">Password</label>
//                             <input id="pass" type="password" className="input" data-type="password" />
//                         </div>
//                         <div className="group">
//                             <input id="check" type="checkbox" className="check" defaultChecked />
//                             <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
//                         </div>
//                         <div className="group">
//                             <input type="submit" className="button" value="Sign In" />
//                         </div>
//                         <div className="hr"></div>
//                         <div className="foot-lnk">
//                             <a href="#forgot">Forgot Password?</a>
//                         </div>
//                     </div>
//                     <div className="sign-up-htm">
//                         <div className="group">
//                             <label htmlFor="user" className="label">Username</label>
//                             <input id="user" type="text" className="input" />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="pass" className="label">Password</label>
//                             <input id="pass" type="password" className="input" data-type="password" />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="pass" className="label">Repeat Password</label>
//                             <input id="pass" type="password" className="input" data-type="password" />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="pass" className="label">Email Address</label>
//                             <input id="pass" type="text" className="input" />
//                         </div>
//                         <div className="group">
//                             <input type="submit" className="button" value="Sign Up" />
//                         </div>
//                         <div className="hr"></div>
//                         <div className="foot-lnk">
//                             <label htmlFor="tab-1">Already Member?</label>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import './Register.css';

const Login = () => {
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [signInError, setSignInError] = useState('');
    const [signUpError, setSignUpError] = useState('');

    const handleSignIn = () => {
        if (!signInUsername || !signInPassword) {
            setSignInError('Please fill in all fields.');
            return;
        }
        //sign in 
    };

    const handleSignUp = () => {
        if (!signUpUsername || !signUpPassword || !repeatPassword || !email) {
            setSignUpError('Please fill in all fields.');
            return;
        }
        if (signUpPassword !== repeatPassword) {
            setSignUpError('Passwords do not match.');
            return;
        }
        if (!email.includes('@gmail.com')) {
            setSignUpError('Please use a valid email address.');
            return;
        }
        // sign up 
    };

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input" value={signInUsername} onChange={(e) => setSignInUsername(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check" defaultChecked />
                            <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" onClick={handleSignIn} />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                        {signInError && <div className="error">{signInError}</div>}
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Repeat Password</label>
                            <input id="pass" type="password" className="input" data-type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input id="pass" type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up" onClick={handleSignUp} />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">Already Member?</label>
                        </div>
                        {signUpError && <div className="error">{signUpError}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;