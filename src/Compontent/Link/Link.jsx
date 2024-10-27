/* eslint-disable react/prop-types */

const Link = ({ route }) => {
    return (
        <li className="mx-12">
            <a href={`${route.path}`}>{route.name}</a>
        </li>
    );
};

export default Link;