import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewsChannels from "../Component/ChannelList/NewsChannels";
import NewsCard from "../Component/News/NewsCard";
import "./App.css";

const App = () => {
    return (
      
      <BrowserRouter>
            <div className="app">
                <header>
                    <h2 className="text-center m-3 font-weight-bolder">News App</h2>
                </header>

                <Switch>
                    <Route path="/" component={NewsChannels} exact />
                    <Route path="/source/:id" component={NewsCard} exact />
                </Switch>

                <footer className="text-center m-2 fixed-bottom font-weight-bolder">
                    <h5>Powered by News API</h5>
                </footer>
            </div>
      </BrowserRouter>

    )
}

export default App;
