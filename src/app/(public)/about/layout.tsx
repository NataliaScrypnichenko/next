import type {Metadata} from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "AboutLayout metadata",

};

 type Props={children: React.ReactNode;};
const AboutLayout = ({children}:Props) => {
    return (
        <div>
            <hr/>
            About Layout
            {children}
            <hr/>
        </div>
    );
};

export default AboutLayout;