import Aboutourteam from "./Aboutourteam";
import Aboutthebestcasino from "./Aboutthebestcasino";
import Header from './Header';
import Slider from './Slider';
import Morethan from './Morethan';
import Footer from './Footer';
import Aboutpageyoursecurity from './Aboutpageyoursecurity';

function About() {
    return (
        <>
            {/* <Header /> */}

            <Slider />

            <Aboutpageyoursecurity />

            <Aboutthebestcasino/>

            <Aboutourteam/>

            <Morethan/>

            {/* <Footer/> */}
        </>
    )
}

export default About