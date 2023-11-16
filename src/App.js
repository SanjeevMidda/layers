import './index.css';
import Layer from './component/Layer';

function App() {
  return (
    <div className="App">

      <h3>LAYERS</h3>
      <Layer color="linear-gradient(rgba(255, 192, 203, 0.713), rgba(255, 255, 0, 0.713))" keyValue="one"/>
      <Layer color="linear-gradient(rgba(128, 0, 128, 0.713), rgba(0, 0, 255, 0.713))" keyValue="two"/>
      <Layer color="linear-gradient(rgba(0, 128, 0, 0.713), rgba(128, 128, 128, 0.713))" keyValue="three"/>
      <Layer color="linear-gradient(rgba(0, 0, 255, 0.713), rgba(255, 192, 203, 0.713))" keyValue="four"/>
      <Layer color="linear-gradient(rgba(255, 166, 0, 0.713), rgba(128, 128, 128, 0.713))" keyValue="five"/>
    </div>
  );
}

export default App;
