import { receivedPosts } from "../Actions/dotnetTodoAction";

export const newPostUser = (todo) =>{
    fetch('http://localhost:29495/api/todos/',{
        method: "POST",
        body:JSON.stringify({todo})
        // headers:{
        //     "Authrization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvb25hbSIsImVtYWlsIjoicG9vbmFtQGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNjg0MDl9._RUJhJZE-5q3iJoCSNZ-90nULD__5kPdk44JK6LXLFw"
        // }
    })
    .then(res => res.json())
    .then(data=> {
        console.log('data: '.data)
        return data;
    });
}

export function fetchPosts(todo) {
      return fetch('http://localhost:29495/api/todos/',{
        method: "POST",
        body:JSON.stringify({todo})
        // headers:{
        //     "Authrization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvb25hbSIsImVtYWlsIjoicG9vbmFtQGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNjg0MDl9._RUJhJZE-5q3iJoCSNZ-90nULD__5kPdk44JK6LXLFw"
        // }
    })
      .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((json) => {
         receivedPosts(json);
      },
     );
   }