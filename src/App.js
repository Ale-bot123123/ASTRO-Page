import './App.css';
import HeaderFixed from "./components/HeaderFixed.js"
import HeaderSection from "./components/HeaderSection.js"
import SocialLinks from "./components/SocialLinks.js"

function App() {
  return (
    <div className="App">
      <HeaderFixed/>
      <HeaderSection/>
      <SocialLinks/>
    </div>
  );
}

export default App;
