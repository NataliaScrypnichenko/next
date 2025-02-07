  // Позначаємо серверну дію-показуємо що працюємо тільки на сервері
  'use server';
//додаєьо інформ
  import sql from 'better-sqlite3';
  import {revalidatePath} from "next/cache";


  const db=sql('meals.db')


  // відправляти дані async (formData:FormData)console.log(formData);
  export const saveMeal = async (formData:FormData) => {
    //   console.log(formData);
     // console.log("saveAction");
    //  fetch
    //      do some stuff
    //      add data to db

 //      дістаємо інфу із data
      const titleValue = formData.get('title');
 //      положити інфу
      db.prepare(`insert into meals(title) values(?)`)
          .run(titleValue)
 //      збереглт інфу в сервері і хочемо перейти на другу сторінку
 //      redirect('пишемо урлу ')
 // щоб не перезавантажувати сторвінку інфа сама з'являлася
      revalidatePath('/')

 }
  //      якщо хощемо залишитися на цій сторінці де заповнюємо форму то
 //ф-я яка буде діставати з БД всі
  type Meal={id:number, title:string};
  export const getMeals = async ():Promise<Meal[]> => {

      return db.prepare<Meal[]>('select * from meals ').all() as Meal[];

  }