import React from "react";
import Card from "./Card"

const CardList = ({ articles }) => {
    return (
        <div>
        {
            articles.map((article,i) => {
            return (
            <Card
            key={articles[i].title}
            title={articles[i].title}
            description={articles[i].description}
            />
            )
            })
        }
        </div>
    )
}

export default CardList;