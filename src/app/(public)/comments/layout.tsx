import type {Metadata} from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "CommentsLayout metadata",

};

type Props={children: React.ReactNode;};
const CommentsLayout = ({children}:Props) => {
    return (
        <div>
            <hr/>
            {children}
            <hr/>
        </div>
    );
};

export default CommentsLayout;