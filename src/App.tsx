import './App.scss';

function App() {
  return (
    <div className="App">
      backend URL : {process.env.REACT_APP_BACKEND_API_URL}
    </div>
  );
}

export default App;