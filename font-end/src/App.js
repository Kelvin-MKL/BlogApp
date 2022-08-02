import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import PublicArticleList from "./components/publicArticleList";
import EditArticle from "./components/editArticle";
import RegisterUser from "./components/registerUser";
import Registered from "./components/successfulRegister";
import Login from "./components/login";
import UserArticleList from "./components/userArticleList";
import React from "react";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<PublicArticleList />}></Route>
          <Route path='/edit/:paramId' element={<EditArticle />} />
          <Route path='/user' element={<RegisterUser />}></Route>
          <Route path='/myarticle' element={<UserArticleList />}></Route>
          <Route path='/registered' element={<Registered />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<PublicArticleList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
