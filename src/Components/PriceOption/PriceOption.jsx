import Features from "../Features/Features";



const PriceOption = ({ prices }) => {
    console.log(prices);
    const { name, price, features } = prices;
    return (
        <div className="bg-blue-600 p-6 m-4 space-y-3 text-white rounded-md">
            <p className="text-3xl text-center">{price}/mon</p>
            <h3 className="text-5xl font-extrabold text-center">{name}</h3>
            <div>
                {
                    features.map((feature, ind) => <Features key={ind} feature={feature}></Features>)
                }
            </div>
            <button className="bg-green-500 w-full p-2 hover:bg-green-950 rounded-md">Add Now</button>
        </div>
    );
};

export default PriceOption;