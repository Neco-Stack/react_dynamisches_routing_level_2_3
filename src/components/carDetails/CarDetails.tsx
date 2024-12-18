import { useParams, Link } from 'react-router-dom';
import carsData from '../carList/cars.json';
import './CarDetails.css';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = carsData.find(c => c.id === Number(id));

  if (!car) {
    return <div className="car-details">Auto nicht gefunden</div>;
  }

  return (
    <div className="car-details">
      <h1>{car.CarMake} {car.carModel}</h1>
      <div className="car-details-content">
        <div className="car-details-image">
          <img src={`https://via.placeholder.com/400x300?text=${car.CarMake}+${car.carModel}`} alt={`${car.CarMake} ${car.carModel}`} />
        </div>
        <div className="car-details-info">
          <p><strong>Marke:</strong> {car.CarMake}</p>
          <p><strong>Modell:</strong> {car.carModel}</p>
          <p><strong>Baujahr:</strong> {car.CarYear}</p>
          <p><strong>ID:</strong> {car.id}</p>
        </div>
      </div>
      <Link to="/" className="back-link">Zurück zur Übersicht</Link>
    </div>
  );
};

export default CarDetails;