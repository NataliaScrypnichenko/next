import type {Metadata} from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "UserLayout metadata",

};

type Props={children: React.ReactNode;};
const UsersLayout = ({children}:Props) => {
    return (
        <div>
            <hr/>
           user Layout id
            {children}
            <hr/>
        </div>
    );
};

export default UsersLayout;