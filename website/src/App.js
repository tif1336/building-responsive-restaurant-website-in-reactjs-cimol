import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './component/Navbar/NavbarComponent';
import Menus from './component/Menus/Menus';
import Footer from './component/Footer/Footer';
import Faq from './component/Faq/Faq';

function App() {
  return (
    <div className="App">
      <Navbarcomponent />

      <h1 className="">Food list</h1>
      <hr />

      <Menus />

      <h1>Faq Restaurant</h1>
      <hr />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
