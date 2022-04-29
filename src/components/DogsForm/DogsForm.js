import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {actionsDog} from "../../redux";

const DogsForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const {dogForUpdate} = useSelector(({dogs}) => dogs)
    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.name);
        }
    }, [dogForUpdate])

    const save = () => {
        if (dogForUpdate) {
            dispatch(actionsDog.updateDog({name, id: dogForUpdate.id}))
        } else {
            dispatch(actionsDog.addDog({name}))
        }
        setName('')
    }

    return (
        <div>
            <label>Dog name :
                <input type="text" onChange={({target}) =>
                    setName(target.value)} value={name}/>
                <button onClick={save}>{dogForUpdate ? 'update' : 'create'}</button>
            </label>
        </div>
    );
};

export {DogsForm};