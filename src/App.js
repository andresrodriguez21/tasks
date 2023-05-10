import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <h1>TASKS</h1>
          <TaskList/>
      </div>
    </div>
  );
}

export default App;