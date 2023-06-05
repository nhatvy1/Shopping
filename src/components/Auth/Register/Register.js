import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSpinner10 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import '../Login/Login.scss';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify'; 
import _ from 'lodash';
import { postCreateUser } from '../../../services/apiService';

const Register = (props)=> {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPasword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState('1')
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleUploadImage = (event)=> {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    const handleShowPassword = ()=> {
        setShowPassword(!showPassword)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleRegister = async ()=> {
        //validate 
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid email')
            return
        }
        if (!password || !confirmPassword) {
            toast.error('Invalid password')
            return
        }
        if (!_.isEqual(password, confirmPassword)) {
            toast.error(`Confirm password doesn't match.`)
            return
        }

        let obj = {
            email: email, 
            password: password,
            firstName: firstName,
            lastName: lastName, 
            phone: phone,
            gender: gender,
            image:  image
        }

        let data = await postCreateUser(obj)
        console.log('Check object: ', obj)

        if (data && data.errCode === 0) {
            toast.success(data.errMessage)
        }

        if (data && data.errCode !== 0) {
            toast.error(data.errMessage)
        }
    }

    return (
        <div className="login-container">
            <div className="header">
            <span>Already have a account?</span>
            <button onClick={()=>navigate('/login')}>Login</button> Contact us
            </div>
            <div className="title col-4 mx-auto">
                Đăng ký
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who’s this?
            </div>
            <div className="form-login col-8 mx-auto">
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
                <div className="form-group">
                    <label>Confirm Password</label>
                    <div className="password-cus">
                        <input className="form-control"
                            type={showPassword === true ? 'text' : 'password' }
                            value={confirmPassword}
                            onChange={(event)=>setConfirmPasword(event.target.value)}
                        />
                        <span onClick={()=>handleShowPassword()}>
                            { showPassword === true ? <AiFillEye /> : <AiFillEyeInvisible /> }
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label>First Name</label>
                        <input type="text" className="form-control"
                            value={firstName}
                            onChange={(event)=>setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label>Last Name</label>
                        <input type="text" className="form-control"
                            value={lastName}
                            onChange={(event)=>setLastName(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-4">
                        <label>Phone</label>
                        <input type="text" className="form-control"
                            value={phone}
                            onChange={(event)=>setPhone(event.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Gender</label>
                        <select className="form-select" onChange={(event)=>setGender(event.target.value)}>
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="labelUpload">
                            <FcPlus /> Upload File Image</label>
                        <input type="file" className="form-control" id="labelUpload"
                            onChange={(event)=>handleUploadImage(event)}
                        />
                    </div>
                    <div className="col-md-12 mt-2 img-preview">
                        <div className="img-display col-3">
                            {
                                previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview image</span>
                            }
                        </div>
                    </div>
                </div>
                <span>Forgot password ?</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={()=>handleRegister()}
                    >
                        {isLoading === true && <ImSpinner10 className="loader-icon"/>}
                         <span>Log in to Typeform</span>
                    </button>
                </div>
                <div className="back">
                    <span onClick={()=>navigate('/login')}
                    >&#60;&#60; Go to login page</span>
                </div>
            </div>
        </div>
    )
}

export default Register