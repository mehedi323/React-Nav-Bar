
// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const gymEquipment = [
        {
            "id": 1,
            "name": "Treadmill",
            "features": [
                "Adjustable speed",
                "Heart rate monitor",
                "Foldable",
                "Bluetooth connectivity",
                "Incline adjustment",
                "Shock absorption system",
                "Large running surface",
                "Built-in speakers",
                "Multiple workout programs"
            ],
            "price": 1200.00
        },
        {
            "id": 2,
            "name": "Exercise Bike",
            "features": [
                "Magnetic resistance",
                "LCD display",
                "Adjustable seat",
                "Pulse sensors",
                "Transport wheels",
                "Tablet holder",
                "Quiet operation",
                "Built-in workout programs",
                "Adjustable handlebars"
            ],
            "price": 800.00
        },
        {
            "id": 3,
            "name": "Dumbbell Set",
            "features": [
                "Hexagonal shape",
                "Rubber coating",
                "Anti-roll design",
                "Ergonomic handles",
                "Weight range from 5 to 50 lbs",
                "Compact storage rack",
                "Durable cast iron",
                "Color-coded weights",
                "Rust-resistant finish"
            ],
            "price": 150.00
        },
        {
            "id": 4,
            "name": "Rowing Machine",
            "features": [
                "Water resistance",
                "Ergonomic handle",
                "Foldable",
                "LCD performance monitor",
                "Adjustable footrests",
                "Aluminum rail",
                "Smooth and quiet operation",
                "Built-in workout programs",
                "Comfortable seat"
            ],
            "price": 1000.00
        },
        {
            "id": 5,
            "name": "Bench Press",
            "features": [
                "Adjustable incline",
                "High-density padding",
                "Steel frame",
                "Leg developer",
                "Preacher curl attachment",
                "Weight plate storage",
                "Durable powder-coated finish",
                "Safety spotters",
                "Adjustable bench height"
            ],
            "price": 300.00
        }
    ];


    return (
        <div>
            <h2>Price-Options: </h2>
            <div className="grid md:grid-cols-3 ">
                {
                    gymEquipment.map(prices => <PriceOption key={prices.id} prices={prices}></PriceOption>)
                }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {

};

export default PriceOptions;