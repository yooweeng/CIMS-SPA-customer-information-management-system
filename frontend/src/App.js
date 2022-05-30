import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import RegisterCustomer from './pages/RegisterCustomer';
import Home from "./pages/Home";
import ViewCustomer from './pages/ViewCustomer';
import EditCustomer from './pages/EditCustomer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registercustomer' element={<RegisterCustomer/>}/>
        <Route path='/viewcustomer/:id' element={<ViewCustomer/>}/>
        <Route path='/editcustomer/:id' element={<EditCustomer/>}/>
      </Routes>
    </div>
  );
}

export default App;
