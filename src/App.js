import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
      return (
            <div className="app">
                  {/* {Header} */}
                  <Header />

                  {/* App body */}
                  <div className="app_body">
                        <Sidebar />
                  </div>
                  {/* Sidebar */}
                  {/*  Feed */}
                  {/* Widgets */}
            </div>
      );
}

export default App;
