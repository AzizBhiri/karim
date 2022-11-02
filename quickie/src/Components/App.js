import "../Styles/App.css";
import Nav from "./Nav";
import Main from "./Main";
import Info from "./Info";
import Footer from "./Footer";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Info />
      <Footer />
      <Canvas />
    </div>
  );
}

export default App;
