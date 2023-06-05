import './Header.scss';
import logo from '../../assets/img/logo.webp';
import { GrSearch } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = ()=> {
    const navigate = useNavigate()
    const handleLogin = ()=> {
        navigate('/login')
    }
    return (
        <>
            <p className="head-navbar">Miễn phí giao hàng toàn quốc với đơn hàng trên 500.000 đ</p>
            <div className="navbar-parent">
                <div className="navbar-container">
                    <div className="navbar-top">
                        <div className="navbar-sex">
                            <button className="btn-sex">Nam</button>
                            <button className="btn-sex">Nữ</button>
                        </div>
                        <div className="navbar-logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="navbar-user">
                            <span className="user-search"><GrSearch /></span>
                            <span className="user-search" onClick={()=>handleLogin()}><FaUser /></span>
                            <span className="user-search"><BsBag /></span>
                        </div>
                    </div>
                </div>
                <div className="navbar-list-menu">
                    <ul className="list-menu">
                        <li className="list-menu-item">Trang chủ</li>
                        <li className="list-menu-item">Bộ sưu tập<span><FaChevronDown /></span></li>
                        <li className="list-menu-item">Sản phẩm<span><FaChevronDown /></span></li>
                        <li className="list-menu-item">Outfit of day</li>
                        <li className="list-menu-item">Hướng dẫn -  chính sách<span><FaChevronDown /></span></li>
                        <li className="list-menu-item">Hệ thống cửa hàng</li>
                        <li className="list-menu-item">Giới thiệu</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header