import { ATovar } from "./components/ATovar/ATovar";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { KTovari } from "./components/KTovari/KTovari";
import { LTovari } from "./components/LTovari/LTovari";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <ATovar/>
      <KTovari/>
      <LTovari/>
    </div>
  );
}

export default App;
