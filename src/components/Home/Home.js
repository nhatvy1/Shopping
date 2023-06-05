import Banner from './Banner/Banner';
import ProductSale from './ProductSale/ProductSale';
import Flashsale from './TopSale/Flashsale';
import TopSale from './TopSale/TopSale';

const Home = (props)=> {
    return (
        <div className="home">
            <Banner />
            <Banner />
            <Banner />
            <Banner />

            <TopSale />
            <Flashsale />   
            <ProductSale />
        </div>
    )
}

export default Home