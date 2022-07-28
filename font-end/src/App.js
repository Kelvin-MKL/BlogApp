import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ArticleList from "./components/articleList";
import EditArticle from "./components/editArticle";
import RegisterUser from "./components/registerUser";
import Registered from "./components/successfulRegister";
import React from "react";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<ArticleList />}></Route>
          <Route path='/edit/:paramId' element={<EditArticle />} />
          <Route path='/user' element={<RegisterUser />}></Route>
          <Route path='/registered' element={<Registered />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
