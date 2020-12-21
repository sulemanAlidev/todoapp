import List from "./List"
import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <List/>
    </Provider>
  );
}

export default App;
