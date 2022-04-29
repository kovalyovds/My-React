import './App.css'
import {Cats, CatsForm, Dogs, DogsForm} from "./components";

function App() {
    return (
        <div>
            <div className={'flex'}>
                <CatsForm/>
                <DogsForm/>
            </div>

            <hr/>

            <div className={'flex'}>
                <Cats/>
                <Dogs/>
            </div>

        </div>
    );
}

export {App};