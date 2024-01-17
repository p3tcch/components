import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const urlContext = createContext({});

function App() {
  
  
  const url = {
      api: "http://localhost:3001/"
  }
   
  
  return (
    
    <div>
      <urlContext.Provider value={url}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login /> }> </Route>
          <Route path="/register" element={<Register in components={{url}}/> }> </Route>
        </Routes>
      </Router>

      </urlContext.Provider>
    </div>
  );
}

export default App;
