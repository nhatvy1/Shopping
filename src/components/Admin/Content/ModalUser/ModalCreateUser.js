import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './ModalUser.scss';
import { toast } from 'react-toastify'; 
import _ from 'lodash';
import { postCreateUser } from '../../../../services/apiUserService';

const ModalCreateUser = (props)=> {
    const { show, setShow } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPasword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState('1')
    const [role, setRole] = useState('1')
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleShowPassword = ()=> {
        setShowPassword(!showPassword)
    }

    const handleUploadImage = (event)=> {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    const handleClose = () => {
        setShow(false);
        setEmail('')
        setPassword('')
        setConfirmPasword('')
        setFirstName('')
        setLastName('')
        setPhone('')
        setRole('')
        setImage('')
        setPreviewImage('')
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmitUser = async()=> {
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
            roleId: role,
            image:  image
        }

        let data = await postCreateUser(obj)
        console.log('Check object: ', obj)

        if (data && data.errCode === 0) {
            toast.success(data.errMessage)
            handleClose()
            props.setCurrentPage(1)
            await props.fetchListUsers(1)
        }

        if (data && data.errCode !== 0) {
            toast.error(data.errMessage)
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-add-user">
            <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
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
                            <div className="form-group col-3">
                                <label>Phone</label>
                                <input type="text" className="form-control"
                                    value={phone}
                                    onChange={(event)=>setPhone(event.target.value)}
                                />
                            </div>
                            <div className="form-group col-3">
                                <label>Gender</label>
                                <select className="form-select" onChange={(event)=>setGender(event.target.value)}>
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                </select>
                            </div>
                            <div className="form-group col-3">
                                <label>Role</label>
                                <select className="form-select" onChange={(event)=>setRole(event.target.value)}>
                                    <option value="1">Admin</option>
                                    <option value="2">Staff</option>
                                </select>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="labelUpload">
                                    <FcPlus /> Upload File Image</label>
                                <input type="file" className="form-control" id="labelUpload"
                                    onChange={(event)=>handleUploadImage(event)}
                                />
                            </div>
                            <div className="form-group col-12">
                                <div className="img-preview">
                                    {
                                        previewImage ?
                                        <img src={previewImage} />
                                        :
                                        <span>Preview image</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleClose()}>
                Close
                </Button>
                <Button variant="primary" onClick={()=>handleSubmitUser()}>
                Saves
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreateUser