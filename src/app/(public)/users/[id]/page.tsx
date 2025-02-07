// типізуємо :FC<Props>
import {FC} from "react";
import {Metadata} from "next";

type Props={
    params:{id:string};
}

// гунерація повина відбуватися тільки тут-тому що якщо будемо використовувати тільки батьківський
export const generateMetadata =async ({params}:Props):Promise<Metadata>=>{
    // робимо User 1.2.. і рендимо його-достаємододоэмо обьэкт({params})
    const  {id} = await params;
    console.log(id);
    return {

        title: "User page title"+ id,//як логотип сторінки використовується
    }
}
// =вирізали і перенесли на леяут

//відхоплюємо ({params})
const UserPage:FC<Props> = async ({params}) => {


    const {id} = await params;
    return (
        <div>
            {id} user page content
        </div>
    );
};

export default UserPage;