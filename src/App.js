import './App.css';
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary />
         </main>
        <footer className="App-footer">
          <small>
            This project was coded by Christina Izquierdo and is open-sourced on <a href="https://github.com/christina-izquierdo/dictionary-react-project">Github</a>.
            <br/>
            Background vector created by <a href='https://www.freepik.com/vectors/background'> rawpixel.com - www.freepik.com</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
