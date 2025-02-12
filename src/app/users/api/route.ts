// запускаємо так як виглядить джейсон
// БУДЕ ПРАЦЮВАти якщо звертається до  домен імені localhost:3000/hello/api/[GET]-цу гітовій запит?
//будемо робтити із hello users,і такоз буде поселання відкриватися не через апі а на пряму
export async function GET (){
    console.log('GET request route handler');
//зобимо запит на арі
     const users =await  fetch('https://jsonplaceholder.typicode.com/users')
         .then(value => value.json())

    // відаємо у відповідь
    return Response.json(users);
}