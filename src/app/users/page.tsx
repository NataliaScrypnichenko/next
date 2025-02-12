import Undici from "undici-types";
import fetch = Undici.fetch;


const UsersPage = async () => {

      const users = await  fetch('https://localhost:3000/users/api').then((res) => res.json());

    return (
        <div>

            {users.map((user:any) => (<div key={user.id}>{user.name}</div>))}
        </div>
    );
};

export default UsersPage;