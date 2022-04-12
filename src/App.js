import css from './App.module.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {useState} from "react";
import {postService} from "./services";

const App = () => {
    const [userDetail, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = async (userId) => {
        const {data} = await postService.getPostById(userId);
        setPosts(data);
    }
    
    const trigger = () => {
      setPosts([])
    }

    return (
        <div>
            <div className={css.wrap}>
                <Users setUserDetails={setUserDetails} trigger={trigger}/>
                {userDetail && <UserDetails userDetail={userDetail} getUserId={getUserId}/>}
            </div>
            <div>
                <hr/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export default App;