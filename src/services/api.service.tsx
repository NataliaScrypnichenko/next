import {IUsers} from "@/models/IUsers";

export const getAllUsers = async ():Promise<IUsers[]> => {

 const users = await fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())

    return users;
}