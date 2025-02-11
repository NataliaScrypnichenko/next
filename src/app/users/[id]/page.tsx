// отримання інфармаціїї з кожного окремого користувача,робимо  напряму додаткові під запити
import {FC} from "react";

type  Props={
   params: Promise<{[key: string]:string | string [] |undefined }>
}


const UserPage:FC<Props> =async ({params}) => {
    const id = (await params).id;
    console.log(id)

    const user = await fetch('http://jsonplaceholder.typicode.com/users/'+id)
        .then((value) =>value .json());

    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserPage;