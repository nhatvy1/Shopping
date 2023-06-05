import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSpinner10 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import './Login.scss';

const Login = (props)=> {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleShowPassword = ()=> {
        setShowPassword(!showPassword)
    }

    return (
        <div className="login-container">
            <div className="header">
            <span>Don't have an account yet?</span>
            <button onClick={()=>navigate('/register')}>Sign up</button> Contact us
            </div>
            <div className="title col-4 mx-auto">
                Đăng nhập
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who’s this?
            </div>
            <div className="form-login col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <div className="password-cus">
                        <input className="form-control"
                            type={showPassword === true ? 'text' : 'password' }
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                        <span onClick={()=>handleShowPassword()}>
                            { showPassword === true ? <AiFillEye /> : <AiFillEyeInvisible /> }
                        </span>
                    </div>
                </div>
                <span>Forgot password ?</span>
                <div>
                    <button
                        className="btn-submit"
                    >
                        {isLoading === true && <ImSpinner10 className="loader-icon"/>}
                         <span>Log in to Typeform</span>
                    </button>
                </div>
                <div className="back">
                    <span onClick={()=>navigate('/')}
                    >&#60;&#60; Go to home page</span>
                </div>
            </div>
        </div>
    )
}

export default Login