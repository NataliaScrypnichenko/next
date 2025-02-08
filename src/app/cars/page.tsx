import { GetServerSideProps } from 'next';
import { getCars } from "@/service/carService";

// Створення типу для автівки
interface Car {
    id: number;
    brand: string;
    price: number;
    year: number;
}

// Типізація для отриманих пропсів
interface CarsPageProps {
    cars: Car[];
}

// Ця сторінка відповідає за виведення всіх автівок з мінімальною інформацією
const CarsPage = ({ cars }: CarsPageProps) => {
    return (
        <div>
            <h1>All Cars</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.brand} - {car.year} - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Використовуємо getServerSideProps з типізацією
export const getServerSideProps: GetServerSideProps<CarsPageProps> = async () => {
    const cars = await getCars(); // getCars має повертати масив Car
    return {
        props: {
            cars
        }
    };
};

export default CarsPage;
