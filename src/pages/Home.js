import '../pages/Home.css';
import Navbar from "../components/navbar/Navbar";
import Mainf from "../components/mainf/Mainf";
import Mains from '../components/section/Mains';
import Habilities from '../components/habilities/Habilities';
import Footer from '../components/footer/Footer';
function Home(){
    return(
        <body>
            <Navbar/>
            <Mainf/> 
            <Mains/>
            <Habilities/>
            <Footer/>
        </body>
    );
}
export default Home;