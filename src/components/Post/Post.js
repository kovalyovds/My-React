import React from 'react';

const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <p>{body}</p>
        </div>
    );
};

export default Post;