import './App.css';

//Containers
import Header from './Containers/App_Header.js';
import Body from './Containers/App_Body.js';
import Footer from './Containers/App_Footer.js';

//Components
import Search from './Components/Inputs/Search_Outline.js';

function App() {
  return (
    <div className="App">
      <Header>
        
      </Header>
      <Body>
        <p>¿A donde vamos hoy?</p>
        <Search/>
      </Body>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
