// типізуємо :FC<Props>
import {FC} from "react";

type Props={
    params:{id:string};
}
//відхоплюємо ({params})
const UserPage:FC<Props> = async ({params}) => {
    //console.log(params) дає проміс тому так робимо
    //     let result = await params;
    //     console.log(result)//видає значення із нашої урли {"id": "5"}
    const {id} = await params;

    return (
        <div>
            {id} user page content
        </div>
    );
};

export default UserPage;