import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  
  const url = {
      api: "http://localhost:3001/"
  }
  
  
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login components={{url}}/> }> </Route>
          <Route path="/register" element={<Register in components={{url}}/> }> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
