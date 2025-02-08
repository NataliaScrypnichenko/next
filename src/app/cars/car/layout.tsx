import type {Metadata} from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "CsrLayout metadata",

};

type Props={children: React.ReactNode;};
const CarLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CarLayout;