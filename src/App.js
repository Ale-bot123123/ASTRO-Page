import './App.css';
import HeaderFixed from "./components/HeaderFixed.js"
import HeaderSection from "./components/HeaderSection.js"
import SocialLinks from "./components/SocialLinks.js"
import CompetenciaSection from "./components/CompetenciaSection.js"

function App() {
  return (
    <div className="App">
      <HeaderFixed/>
      <main>
        <HeaderSection/>
        <CompetenciaSection/>
      </main>
      <SocialLinks/>
    </div>
  );
}

export default App;
