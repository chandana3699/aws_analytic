import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga'; 
import RouteChangeTracker from './Components/UseAnalyticsEventTracker.jsx';

const TRACKING_ID = "UA-250102416-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



function App() {
  return (
    <div className="App">
      <p>aws cost estimate</p>
      <p>new react application</p>
      <button onClick={() =>{
        ReactGA.event({
          category: 'testing',
          action: 'analytic account'
        });
        ReactGA.exception({
          description: 'An error ocurred',
          fatal: true
        });
        alert('clicked');
      }}>Click!
      </button>
      <div>
        <RouteChangeTracker/>
      </div>
    </div>
  );
}

export default App;
