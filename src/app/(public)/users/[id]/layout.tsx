import type {Metadata} from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "UserLayout metadata",

};

// не потрібно тут використовувати generateMetadata
// export const generateMetadata =async ({params}:{params:{id:string}}):Promise<Metadata>=>{
//     // робимо User 1.2.. і рендимо його-достаємододоэмо обьэкт({params})
//     const  {id} = await params;
//     console.log(id);
//     return {
//
//         title: "User page title"+ id,//як логотип сторінки використовується
//     }
// }

type Props={children: React.ReactNode;};
const UsersLayout = ({children}:Props) => {
    return (
        <div>
            <hr/>

            {children}
            <hr/>
        </div>
    );
};

export default UsersLayout;