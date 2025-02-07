// отримує певні данні
import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {
//отримуємо всіх користувачів
  const users = await getAllUsers();

  return (
  <div>
    {
      // виводимо данні користувача і робимо клікабельними/зобимо окремий компонент
      users.map((user) => <div key={user.id}>
        <Link href={{pathname:'/users/'+user.id.toString(),query:{data:JSON.stringify(user)} }} >
          {/*при кліку на юзера його інформація передається ім'я в урлу query:{name:user.name} або все {...user} або {data:JSON.stringify(user)} */}
          {user.id}{user.name}{user.email}
        </Link>
      </div>)
    }
  </div>
  )
};