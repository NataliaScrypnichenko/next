import {IUser} from "@/app/model/IUser";


const UsersPage = async () => {
    const users = await fetch('http://jsonplaceholder.typicode.com/users')
        .then((value) =>value .json());

    return (
        <div>
            {users.map((user:IUser) => (<div key={user.id}>{user.name}</div>))}
        </div>
    );
};

export default UsersPage;