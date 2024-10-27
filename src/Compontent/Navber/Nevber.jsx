import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";



const Nevber = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];

    return (
        <nav>
            <div className="md:hidden text-3xl mx-9  py-5 px-8 bg-red-400" onClick={() => setOpen(!open)}>
                {
                    open===true?<IoCloseSharp></IoCloseSharp>:<TiThMenu></TiThMenu>
                }

            </div>
            <ul className={`flex-wrap md:flex duration-1000 ml-9 mt-5 md:mt-0 md:ml-0 
                ${open ?'top-12':'-top-48'}
                justify-around py-4 text-orange-500 absolute md:static bg-slate-300`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nevber;