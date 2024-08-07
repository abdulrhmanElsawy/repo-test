import Landing from '@components/Landing';
import SideInfo from '@components/SideInfo';
import Numbers from '@components/Numbers';
import Story from '@components/Story';
import VideoSection from '@components/VideoSection';
import Services from '@components/Services';
import Rates from '@components/Rates';
import LatestWork from '@components/LatestWork';
import Copyright from '@components/Copyright';




import  "bootstrap/dist/css/bootstrap.min.css"


const Home = () => {
    return (
        <>
            <Landing />
            <SideInfo />
            <Numbers />
            <Story />
            <VideoSection />
            <Services />
            <Rates />
            <LatestWork />
            <Copyright />


        </>
    )
}

export default Home
