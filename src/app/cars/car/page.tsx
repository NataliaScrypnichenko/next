import {createCar} from "@/service/carService";
import {useState} from "react";


const CreateCarPage = () => {
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Перевірка заповнення форми
        if (!brand || !price || !year) {
            alert('Please fill in all fields');
            return;
        }

        // Створення нового об'єкта автівки
        const newCar = { brand, price: Number(price), year: Number(year) };

        try {
            // Відправка даних на сервер для створення нової автівки
            await createCar(newCar);
            alert('Car created successfully!');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert('Error creating car');
        }
    };

    return (
        <div>
            <h1>Create New Car</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Brand:
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            placeholder="Enter car brand"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter car price"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Year:
                        <input
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Enter car year"
                        />
                    </label>
                </div>
                <button type="submit">Create Car</button>
            </form>
        </div>
    );
};

export default CreateCarPage;
