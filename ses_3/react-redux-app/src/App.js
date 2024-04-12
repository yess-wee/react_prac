import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {Provider} from 'react-redux'
import store from './pages/store'
import Chat from './pages/Chat';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <h1> React-Redux Login page</h1>
          <Login/>
          <Chat/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
