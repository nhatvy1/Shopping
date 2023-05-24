import img1 from '../../../assets/img/1.webp';
import img2 from '../../../assets/img/2.webp';
import img3 from '../../../assets/img/3.webp';
import img4 from '../../../assets/img/4.webp';
import img5 from '../../../assets/img/5.webp';
import './TopSale.scss';

const TopSale = (props)=> {
    return (
        <div class="top-sale">
            <div className="top-sale-item">
                <div className="top-sale-item-img">
                    <img src={img1} alt="" />
                </div>
                <p className="top-sale-item-text">Áo</p>
            </div>
            <div className="top-sale-item">
                <div className="top-sale-item-img">
                    <img src={img2} alt="" />
                </div>
                <p className="top-sale-item-text">Quần</p>
            </div>
            <div className="top-sale-item">
                <div className="top-sale-item-img">
                    <img src={img3} alt="" />
                </div>
                <p className="top-sale-item-text">Sét Quần Áo</p>
            </div>
            <div className="top-sale-item">
                <div className="top-sale-item-img">
                    <img src={img4} alt="" />
                </div>
                <p className="top-sale-item-text">Giày Dép</p>
            </div>
            <div className="top-sale-item">
                <div className="top-sale-item-img">
                    <img src={img5} alt="" />
                </div>
                <p className="top-sale-item-text">Phụ kiện</p>
            </div>
        </div>
    )
}

export default TopSale