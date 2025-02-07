
import styles from "./page.module.css";
import Form from "next/form";
import {getMeals, saveMeal} from "@/server_actions/serverActions";

// витягуємо з бізи даних сервира витягнути інфу

export default async function Home() {
    // витягуємо з бізи даних сервира витягнути інфу
   const mealsArry = await getMeals();

  return (
    <div className={styles.page}>

      <Form action={saveMeal}>
        <input type="text"  name={'title'}/>
        <button>Submit</button>
      </Form>

    {/* витягуємо з ізи даних сервира витягнути інфу   */}
        <div className={'meals'}>
            {
              mealsArry.map(meal => (<div key={meal.id}>{meal.title}</div>))
            }
        </div>

    </div>
  );
}
