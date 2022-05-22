
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Jobs from './pages/Jobs';
import Error404 from './pages/Error404';
import Skills from './pages/Skills';
import Studies from './pages/Studies';
import Study from './pages/Study';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path='/Portafolio/' element={<Home/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>
      <Route path='/error404' element={<Error404/>}></Route>
      <Route path='/studies' element={<Studies/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/home' element={<Navigate replace to={"/"}/>}></Route>
      <Route path='/studies/:id' element={<Study/>}></Route>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
