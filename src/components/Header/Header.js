import './Header.scss';
import logo from '../../assets/img/logo.webp';
import { GrSearch } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../services/apiCategoriesService';

const Header = ()=> {
    const [listCategories, setListCategories] = useState([])
    const navigate = useNavigate()
    const handleLogin = ()=> {
        navigate('/login')
    }

    useEffect(()=> {
        fetchListCategories('ALL')
    }, [])

    const fetchListCategories = async(id)=> {
        let res = await getAllCategories(id)
        if (res.errCode === 0) {
            setListCategories(res.categories)
        }
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
                        <NavLink to="/" className="nav-link"><li className="list-menu-item">Trang chủ</li></NavLink>
                        <NavLink to="/" className="nav-link">
                            <li className="list-menu-item">Bộ sưu tập<span><FaChevronDown /></span>
                            <ul className="list-menu-sub">
                                    <li><NavLink to="/" className="nav-link">Vacation mode</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Phối đồ trong 1 giây</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Giày Gravi-Cap Somehow SS23</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Sale 50%</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Alone</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Sh Diagram</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">The partner</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">AfterGlow</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Garment Factory</NavLink></li>
                                </ul>
                            </li>
                            </NavLink>
                        <NavLink to="/" className="nav-link">
                            <li className="list-menu-item">Sản phẩm<span><FaChevronDown /></span>
                                <ul className="list-menu-sub">
                                    <li><NavLink to="/" className="nav-link">Sản phẩm mới</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Sản phẩm bán chạy</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Chất liệu mới</NavLink></li>
                                    <li><NavLink to="/" className="nav-link">Sale 50%</NavLink></li>
                                    {listCategories && listCategories.length > 0 &&
                                        listCategories.map((category, index)=> {
                                            return (
                                                <li key={index}>{category.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </NavLink>
                        <NavLink to="/" className="nav-link"><li className="list-menu-item">Outfit of day</li></NavLink>
                        <NavLink to="/" className="nav-link"><li className="list-menu-item">Hướng dẫn -  chính sách<span><FaChevronDown /></span></li></NavLink>
                        <NavLink to="/" className="nav-link"><li className="list-menu-item">Hệ thống cửa hàng</li></NavLink>
                        <NavLink to="/" className="nav-link"><li className="list-menu-item">Giới thiệu</li> </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header