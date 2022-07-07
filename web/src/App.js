import './App.css';
import { Intro } from './fragments/Intro/Intro';
import { Navbar } from './fragments/Navbar/Navbar';
import { Profits } from './fragments/Profits/Profits';
import { Security } from './fragments/Security/Security';
import { Equity } from './fragments/Equity/Equity';
import { AssetsSection } from './fragments/AssetsSection/AssetsSection';
import { Footer } from './fragments/Footer/Footer';
import { IntroductionPanel } from './fragments/Intro/IntroductionPanel';

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Intro/>
        <IntroductionPanel/>
        <Profits/>
        <Security/>
        <Equity/>
        <AssetsSection/>
        <Footer/>
    </div>
  );
}

export default App;
