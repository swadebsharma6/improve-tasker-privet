import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TaskContainer from "../components/TaskContainer";


const Main = () => {
    return (
        <div className="container mx-auto">
        
          <Header></Header>
          <HeroSection></HeroSection>
          <TaskContainer></TaskContainer>
          <Footer></Footer>
        </div>
    );
};

export default Main;