import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Weather from "./components/weather";
import { Calendar } from "antd";

function App() {
  return (
    <div className="App">
      <div className='calendar'>
      <Calendar fullscreen={false} />
      </div>
      <Weather />
      <TodoWrapper  />
    </div>
  );
}

export default App;