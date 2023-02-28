import KnowAbout from "./know-about/know-about";
import JoinNowTrendingContainer from "./join-now-trending/join-now/join-now-trending-container";

import '../../assets/scss/components/home/home.scss'
import {useEffect} from "react";

const Home = ({title, ...props}) => {
    useEffect(() => {
        document.title = title
    })

    return (
            <div className='home-container'>
                <KnowAbout {...props}/>
                <hr className='solid black'/>
                <JoinNowTrendingContainer {...props}/>
            </div>
    )
}

export default Home;