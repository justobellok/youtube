import Menu from "./components/Menu"
import Sugerencia from "./components/Sugerencia"
import Nav from "./components/Nav"
import "./components/style/app.css"
import Content from  "./components/Content"

function App() {


  return (
    <div>
      <Menu user="justo" />
      <Sugerencia />

      <div className="container">
      <Nav />
      <Content />
      </div>
    
    </div>
  );
}

export default App;

