import {createCar} from "@/service/carService";
import {useState} from "react";


const CreateCarPage = () => {
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!brand || !price || !year) {
            alert('Please fill in all fields');
            return;
        }

        const newCar = { brand, price: Number(price), year: Number(year) };

        try {
            await createCar(newCar);
            alert('Car created successfully!');
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(`Error creating car: ${error.message}`);
            } else {
                alert('Error creating car');
            }
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
