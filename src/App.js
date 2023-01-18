import { ATovar } from "./components/ATovar/ATovar";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { KTovari } from "./components/KTovari/KTovari";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <ATovar/>
      <KTovari/>
    </div>
  );
}

export default App;
