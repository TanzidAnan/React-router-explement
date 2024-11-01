/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    console.log(option)
    return (
        <div className="bg-red-300 text-black flex flex-col rounded-xl p-4 text-center">

            <h2 className="text-center">
                <span className="text-5xl font-extrabold ">{price}</span>
                <span className="text-2xl ">/mon</span>
            </h2>
            <h1 className="text-3xl mt-4">{name}</h1>
            <div className="flex-grow">
                {
                    features.map(feature => <li className="text-start mt-2">{feature}</li>)
                }
            </div>
            <button className="bg-green-600 block px-4 py-3 hover:bg-orange-500">Add </button>
        </div>
    );
};

export default PriceOption;