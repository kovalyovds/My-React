import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {
        id, name, username,
        address: {
            street, city
        }, phone, website
    } = user;
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>city : {city}</div>
            <div>street : {street}</div>
            <div>phone : {phone}</div>
            <div>website : {website}</div>
            <br/>
            <Button to={'posts'}>get posts</Button>
        </div>
    );
};

export {UserDetails};

// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
// "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness r