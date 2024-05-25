import { FaCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
    return (
        <div className="pt-4 text-black">
            <p className="flex items-center gap-5"><FaCheckCircle></FaCheckCircle> {feature}</p> 
            
        </div>
    );
};

export default Features;