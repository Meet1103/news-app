import React , {Component} from "react";
import Loading from "../Common/Loading";
import Scroll from "../Common/Scroll";
import Search from "./Search";
import NameList from "./NameList";
import NoChannel from "./NoChannel"

class NewsChannels extends Component {
    state = {
        channels:[],
        searchQuery:"",
        loading: true
    }

    componentDidMount = () => {
        const api = process.env.REACT_APP_API;

        fetch(`https://newsapi.org/v2/sources?apiKey=${api}`)
        .then(response=> response.json())
        .then(data => {this.setState({ channels: data.sources , loading: false})})
    }

    onSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {
    let { channels , searchQuery , loading } = this.state;
    // Runs this while data is being fetched from news api
    if (loading) {
        console.log("load",channels)
        return <Loading />
    }

    // Runs this when data is fetched
    else {
    const filteredChannels = channels.filter(channel =>{
        return channel.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return (
        <div>
            {console.log("real",channels)}
            <Search onSearchChange={this.onSearchChange} />
            { /* Runs this , if theres any matching channel with search result */ }
            <Scroll>
                    <NameList channels={filteredChannels} />
            </Scroll>
            { /* Runs this , if theres no matching channel with search result */ }
            <NoChannel channels={filteredChannels} />
        </div>
    )
    }
    
    }
}

export default NewsChannels;