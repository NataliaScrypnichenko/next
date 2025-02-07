import React, {FC} from 'react';
import {Metadata} from "next";

type Props = {
    params:{id:string};
};

export const generateMetadata=async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title:"Comment page title"+id,
    }
};


const CommentPage:FC<Props> = async ({params}) => {
   const {id} = await params;

    return (
        <div>
        comment page content {id}
        </div>
    );
};

export default CommentPage;