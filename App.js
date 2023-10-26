import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <FeaturedArticles/>
        <FeaturedTutorials/>
      <SignUp/>
        <FooterComponent/>
    </div>
  );
}

export default App;
