import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

const FooterComponent = () => {

    return (
        <footer className="ui bottom attached stackable segment">
            <Grid centered>
                <Grid.Column width={4}>
                    <Segment>
                        <Header>About</Header>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <Header>Support</Header>
                        <ul>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Help Articles</a></li>
                            <li><a href="/">Contact Support</a></li>
                        </ul>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <Header>Stay Connected</Header>
                        <ul>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">LinkedIn</a></li>
                        </ul>
                    </Segment>
                </Grid.Column>
            </Grid>
            <Segment>
                <Header>Deakin University</Header>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Code of Conduct</a></li>
                </ul>
            </Segment>
        </footer>
    );
};

export default FooterComponent;
