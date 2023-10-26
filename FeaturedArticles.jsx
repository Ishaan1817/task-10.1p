import React from 'react';
import ArticleCard from "./ArticleCard";
import {Grid, Header} from "semantic-ui-react";

const FeaturedArticles = () => {
    return (
        <div>
            <br/>
            <Header as={'h1'} textAlign={"center"}>
                Featured Articles
            </Header>
                <br/>
            <Grid centered>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </Grid>
        </div>
    );
};

export default FeaturedArticles;