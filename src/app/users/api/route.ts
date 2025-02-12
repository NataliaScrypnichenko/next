// запускаємо так як виглядить джейсон
// БУДЕ ПРАЦЮВАти якщо звертається до  домен імені localhost:3000/hello/api/[GET]-цу гітовій запит?
//будемо робтити із hello users,і такоз буде поселання відкриватися не через апі а на пряму



// export async function GET (request: Request, response: Response) {
// //     console.log('GET request route handler');
// // //зобимо запит на арі
// //      const users =await  fetch('https://jsonplaceholder.typicode.com/users')
// //          .then(value => value.json());
// //      console.log(request);
// //      console.log(response);
// //
// //     // відаємо у відповідь
// //     return Response.json(users);
//
//     // провірка чи працює урла
//     return Response.json({message:request.url, status:200});
// }

export const GET = async (request: Request, response: Response)=> {
    console.log('GET request route handler');
   //зобимо запит на арі
     const users =await  fetch('https://jsonplaceholder.typicode.com/users')
         .then(value => value.json());
     console.log(request);
     console.log(response);

    // відаємо у відповідь
    return Response.json(users);

}

//зробити обробник POST 'http://localhost:3000/users/api'[POST]
// чурез пост робимо приложеніжє

 export const POST = () => {
  console.log('POST request route handler');
  return Response.json({message:'request route handler POST'})
};
