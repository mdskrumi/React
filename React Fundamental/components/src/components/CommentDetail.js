import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.internet.userName}
                    </a>
                    <div className="metadata">
                        <span className="date"> {faker.date.weekday()} </span>
                    </div>
                    <div className="text"> {faker.lorem.sentence()}</div>
                </div>
            </div>
    );
}

export default CommentDetail;