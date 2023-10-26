import React from 'react';
import {Card, Icon} from "semantic-ui-react";
import {faker} from '@faker-js/faker';
import './ArticleCard.css'

const extra = (
    <div className={"article-card"}>
        <Icon name='star' color={'yellow'}/>
        5
        <p>
            {faker.person.fullName()}
        </p>
    </div>
)

const ArticleCard = () => {
    return (
        <div>
            <Card
                image={faker.image.nature()}
                header={faker.lorem.word()}
                description={faker.lorem.sentence()}
                extra={extra}
            />
        </div>
    );
};

export default ArticleCard;