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
        <Link href={`/users/${user.id}`}>
          {user.id}{user.name}{user.email}
        </Link>
      </div>)
    }
  </div>
  )
};