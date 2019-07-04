import React , {Component} from "react";
import Loading from "../Common/Loading";
import Scroll from "../Common/Scroll";
import CardList from "./CardList"


class NewsCard extends Component {
    state = {
        articles: [],
        loading: false
    }

    componentDidMount() {
        const api = process.env.REACT_APP_API;
        const id = this.props.match.params.id;

        this.setState({ loading : true })

        fetch(`https://newsapi.org/v2/everything?sources=${id}&apiKey=${api}`)
        .then(response => response.json())
        .then(data => {this.setState({ articles : data.articles , loading : false})})
    }

    render() {
        let { articles , loading } = this.state;
        // Runs this while data is being fetched from news api
        if (loading) {
            return <Loading />
        }

        // Runs this when data is fetched
        else {
            return (
                <div>
                    <Scroll>
                            <CardList articles={articles} />
                    </Scroll>
                </div>
            )
        }
    
    }

}

export default NewsCard;