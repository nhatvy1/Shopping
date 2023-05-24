import banner from  '../../../assets/img/banner.webp';
import './Banner.scss';

const Banner = (props)=> {
    return (
        <div className="banner">
            <img src={banner} alt="Loi" />
        </div>
    )
}

export default Banner