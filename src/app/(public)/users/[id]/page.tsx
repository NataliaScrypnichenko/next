// типізуємо :FC<Props>
import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUsers} from "@/models/IUsers";

type Props={
    params:Promise<{id:string}>;
    searchParams: Promise<SearchParams>;//відхоплює що знаходиться в урлі
}

// генерація повина відбуватися тільки тут-тому що якщо будемо використовувати тільки батьківський
export const generateMetadata =async ({params}:Props):Promise<Metadata>=>{
    // робимо User 1.2.. і рендимо його-достаємододоэмо обьэкт({params})
    const  {id} = await params;
    console.log(id);
    return {

        title: "User page title"+ id,//як логотип сторінки використовується
    }
}


//відхоплюємо ({params})
const UserPage:FC<Props> = async ({searchParams}) => {
    // цю логіку можна винести окремо в сервіс допоміжний  не тут
    const {data} = await searchParams;
    // перевіряємо
    let obj=null
    if (typeof data === "string") {
       obj=JSON.parse(data) as IUsers;
    }
    return (
        <div>
            {
             obj && <>user page content {obj.id}{obj.name}</>
            }
        </div>
    );
};

export default UserPage;