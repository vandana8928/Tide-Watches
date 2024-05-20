import "./App.css";
import Navigation from "./Component/Navigation";
import Hero from "./Component/Hero";
import Product from "./Component/Product";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Hero/>
     <Product/>
     <Footer/>
    </div>
  );
}
export default App;
