//тут буде форма//форма де логін і є пароль повині бути приховані то додаємо method="POST" <form action="/submit" method="POST">
// але вона переходить в нікуди
import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
  return (
    <div className={styles.page}>
      {/*/!*  дає відображення в урлі*!/*/}
      {/*  <form action="/submit" >*/}
      {/*      <input type="text" name={"name"} placeholder={'login'}/>*/}
      {/*      <input type="text" name={"name"} placeholder={'password'}/>*/}
      {/*      <button>Submit</button>*/}
      {/*  </form>*/}

        <Form action={'/submit'}>
            <input type="text" name={"name"} />
               <button>Submit</button>

        </Form>

    </div>
  );
}
