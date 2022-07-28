import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ArticleList from "./components/articleList";
import EditArticle from "./components/editArticle";
import CreateUser from "./components/createUser";
import React from "react";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<ArticleList />}></Route>

          <Route path='/edit/:paramId' element={<EditArticle />} />
          <Route path='/user' element={<CreateUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
