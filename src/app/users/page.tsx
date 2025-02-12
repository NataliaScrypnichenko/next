import {IUser} from "@/app/model/IUser";

const UsersPage = async () => {

      const users = await  fetch('https://localhost:3000/users/api')
          .then((res) => res.json());

    return (
        <div>
            {users.map((user:IUser) => (<div key={user.id}>{user.name}</div>))}

        </div>
    );
};

export default UsersPage;