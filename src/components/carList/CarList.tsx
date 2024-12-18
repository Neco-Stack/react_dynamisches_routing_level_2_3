import { Link } from "react-router-dom";
import carsData from './cars.json';
import { Car } from "../../types/types";
import "./CarList.css"



const CarList: React.FC = () => {
    return (
        <div className="grid">
            {carsData.map((car: Car) => (
                <div key={car.id} className="car-item">
                    <h2>{car.CarMake} {car.carModel}</h2>
                    <p>Year: {car.CarYear}</p>
                    <Link to={`/car/${car.id}`}>Read more</Link>
                </div>
            ))}
        </div>
      );
}
 
export default CarList;