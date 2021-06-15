import { useState } from 'react';
import './App.scss';
import Current from './components/Current';
import Daysforecast from './components/Daysforecast';
import Search from './components/Search';
import Modal from './components/Modal';


function App() {

  const [search, setSearch] = useState();

  return (
    <div className="App Container">
      <div>
        <Search setSearch={setSearch} />
        <Current city={search} />
        <Modal show={false} />
      </div>
      <div>
        <h2>8-day forecast</h2>
        <Daysforecast city={search} />
      </div>
    </div>
  );
}

export default App;
