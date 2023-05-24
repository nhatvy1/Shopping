import fl from '../../../assets/img/flashsale.webp';
import './Flashsale.scss';

const Flashsale = (props)=> {
    return (
        <div className="flash-sale container">
            <div className="sale-img">
                <img src={fl} alt=''/>  
            </div>
            <div className='sale-color'></div>
            <div className="sale-time">
                <span className="time-text">00</span>
                <span className="time-text">12</span>
                <span className="time-text">58</span>
                <span className="time-text">20</span>
            </div>
        </div>
    )
}

export default Flashsale