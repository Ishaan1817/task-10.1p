import React from 'react';
import {Header, Image, Grid, Search, Button} from "semantic-ui-react";
import './Header.css'

const Headers = () => {
    return (
        <div>
            <Header block>
                <div className={'header-container'}>
                    <div>
                        <h1>DEV@Deakin</h1>
                    </div>
                    <div>
                        <Grid textAlign={"left"}>
                            <Grid.Column>
                                <Search
                                    placeholder='Search...'
                                />
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div className={"button"}>
                        <Button secondary>
                            POST
                        </Button>
                        <Button primary>
                            LOGIN
                        </Button>
                    </div>
                </div>
            </Header>
            <Image
                src='https://augstudy.com/aug-website-files/wp-content/uploads/2018/01/institutions/deakin_university_740x400.jpg'
                size='massive' rounded horizontal centered/>
        </div>
    );
};

export default Headers;