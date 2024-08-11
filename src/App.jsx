import HomePage from "./pages/Homepage/HomePage";
import  { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<HomePage />}/> 
      <Route path='/auth' element={<AuthPage />}/>
    </Routes>
    </>
  );  
}

export default App;
