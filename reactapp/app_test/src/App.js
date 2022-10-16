import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown.js';



const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div><Dropdown /></div>
    </div>
  )
}
const Header = () => {
  return <h1>Hello world !</h1>;
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

export default App;
