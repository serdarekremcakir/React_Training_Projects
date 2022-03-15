import './App.css';
import UsersNativeFetch from './components/UsersNativeFetch';
import UsersAxios from './components/UsersAxios';

function App() {
  return (
    <div className="App">
        <UsersNativeFetch/>
        <UsersAxios/>
    </div>
  );
}

export default App;