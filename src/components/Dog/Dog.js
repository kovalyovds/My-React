import {useDispatch} from "react-redux";

import {actionsDog} from "../../redux";

const Dog = ({dog}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {dog.name}
            <button onClick={()=> dispatch(actionsDog.setDogUpdate({dog}))}>update</button>
            <button onClick={()=> dispatch(actionsDog.deleteDog({id: dog.id}))}>delete</button>
        </div>
    );
};

export {Dog};