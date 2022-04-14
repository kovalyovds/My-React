import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDeleteCarId}) => {
    const {id, model, price, year} = car;
    const deleteCar = async () => {
        await carService.deleteById(id)
        setDeleteCarId(id)
    }

    return (
        <div>
            <br/>
            <div>id : {id}</div>
            <div>model : {model}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={() => deleteCar()}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
        </div>
    );
};

export {Car};