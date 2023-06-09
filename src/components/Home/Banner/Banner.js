import banner2 from  '../../../assets/img/banner2.webp';
import './Banner.scss';

const Banner = (props)=> {
    return (
        <div className="banner">
            <img src={banner2} alt="Loi" />
        </div>
    )
}

export default Banner