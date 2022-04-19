import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import {PostDetail} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();

    const [post, setPost] = useState(state);

    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data));
        } else {
            setPost(state);
        }
    }, [id, state]);

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {SinglePostPage};