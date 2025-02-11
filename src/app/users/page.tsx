import {IUser} from "@/app/model/IUser";
// {next: {revalidate: 5}}- це задоно час на обновлення даних=революдувати сторінку?коли пишемо там 0 то сторінку перетворює
const UsersPage = async () => {
    const users = await fetch("http://jsonplaceholder.typicode.com/users", {next: {revalidate: 2}})//{cache:'no-cache'}
        .then((value) =>value .json());

    return (
        <div>
            {/*повертає значення в мл секундах значення,щоб виконати команду потрібно (run start)*/}
            <h2>{Date.now()}</h2>
            {
                users.map((user:IUser) => (<div key={user.id}>
                    {user.username}
                </div>))
            }
        </div>
    );
};

export default UsersPage;