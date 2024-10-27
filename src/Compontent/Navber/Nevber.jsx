
const Nevber = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      
    return (
        <nav>
            <ul className="flex-wrap md:flex ml-6 md:ml-0 justify-around py-4 text-orange-500">
            {
                routes.map(route =><li key={route.id}>
                    <a href={`${route.path}`}>{route.name}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Nevber;