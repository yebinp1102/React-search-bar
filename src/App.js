import react from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductData from './Data.json'

function App() {
  return (
    <div className="App">
      <SearchBar placehoder="Enter a product name..." data={ProductData} />
    </div>
  );
}

export default App;
