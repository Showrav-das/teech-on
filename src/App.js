import './App.css';

import { Routes, Route} from "react-router-dom";
import Create1 from './components/Create/Create1';
import Home from './components/Home';
import Create2 from './components/Create/Create2';
import Blog from './components/Blog';
import Create3 from './components/Create/Create3';
import Create4 from './components/Create/Create4';
import Intended from './components/Create/CourseGoal/Intended';
//import Cart from './components/Cart';
import StuNotification from './components/Payment/Student/StuNotification';
import Learn from './components/Payment/Student/Learn';


function App() {

  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="course/create/1" element={<Create1/>} />
        <Route path="course/create/2" element={<Create2/>} />
        <Route path="course/create/3" element={<Create3/>} />
        <Route path="course/create/4" element={<Create4/>} />
        <Route path="manage/goals" element={<Intended/>} />
        <Route path="blog" element={<Blog/>} />
        {/*<Route path="cart" element={<Cart/>} />*/}
        <Route path="notification" element={<StuNotification/>} />
        <Route path="notification/student" element={<Learn/>} />
                     
      </Routes>
      
    </div>
  );
}

export default App;
