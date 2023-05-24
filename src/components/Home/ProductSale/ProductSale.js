import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trouser from '../../../assets/img/trousers.webp';
import { AiFillThunderbolt } from 'react-icons/ai';
import './ProductSale.scss';
import img1 from '../../../assets/img/1.webp';
import img2 from '../../../assets/img/2.webp';
import img3 from '../../../assets/img/3.webp';
import img4 from '../../../assets/img/4.webp';
import img5 from '../../../assets/img/5.webp';


const ProductSale = (props)=> {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <div className="product-sale container">
            <Slider {...settings}>
                <div className="product-item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={trouser} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <p className="product-name">Quần Jean Skinny Tom Pock</p>
                            <p className="product-price">
                                <span><AiFillThunderbolt /></span>
                                <span>44,000</span>
                                <span>đ</span>
                                <span>44,000</span>
                                <span>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img1} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <p className="product-name">Quần Jean Skinny Tom Pock</p>
                            <p className="product-price">
                                <span><AiFillThunderbolt /></span>
                                <span>44,000</span>
                                <span>đ</span>
                                <span>44,000</span>
                                <span>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img2} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <p className="product-name">Quần Jean Skinny Tom Pock</p>
                            <p className="product-price">
                                <span><AiFillThunderbolt /></span>
                                <span>44,000</span>
                                <span>đ</span>
                                <span>44,000</span>
                                <span>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img3} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <p className="product-name">Quần Jean Skinny Tom Pock</p>
                            <p className="product-price">
                                <span><AiFillThunderbolt /></span>
                                <span>44,000</span>
                                <span>đ</span>
                                <span>44,000</span>
                                <span>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img4} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <p className="product-name">Quần Jean Skinny Tom Pock</p>
                            <p className="product-price">
                                <span><AiFillThunderbolt /></span>
                                <span>44,000</span>
                                <span>đ</span>
                                <span>44,000</span>
                                <span>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img5} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <p className="product-name">Quần Jean Skinny Tom Pock</p>
                            <p className="product-price">
                                <span><AiFillThunderbolt /></span>
                                <span>44,000</span>
                                <span>đ</span>
                                <span>44,000</span>
                                <span>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ProductSale