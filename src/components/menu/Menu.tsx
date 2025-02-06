import Link from "next/link";


export const  Menu = () => {
    return (
        <div>
            <ul>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                <Link href={'/contacts'}>contacts</Link>
            </li>
            <li>
                <Link href={'/users'}>Users</Link>
            </li>
            <hr/>
            </ul>
        </div>
    );
};

export default Menu;