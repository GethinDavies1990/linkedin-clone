import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Header />
      {/* App body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/*  Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
