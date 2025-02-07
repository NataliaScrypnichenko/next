import Link from "next/link";

export const Menu = ()=>{

    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                    <Link href={'/users/id'}>Users</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                    <Link href={'/posts/id'}>Posts</Link>
                </li>
                <li>
                    <Link href={'/comments'}>Comments</Link>
                    <Link href={'/comments/id'}>Comments</Link>
                </li>
               <hr/>
            </ul>
        </div>
    )


}