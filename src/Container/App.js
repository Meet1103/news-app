import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewsChannels from "../Component/ChannelList/NewsChannels";
import "./App.css";

const App = () => {
    return (
      
      <BrowserRouter>
            <div className="app">
                <header>
                    <h2 className="text-center m-3 font-weight-bold">News App</h2>
                </header>

                <Switch>
                    <Route path="/" component={NewsChannels} exact />
                </Switch>

                <footer className="text-center m-2 fixed-bottom font-weight-bolder">
                    <h6>Powered by <a href="https://newsapi.org/" target="_blank">News API</a></h6>
                </footer>
            </div>
      </BrowserRouter>

    )
}

export default App;
