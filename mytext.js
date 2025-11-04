fetch('http://localhost:3000/USERS/1df3',{
    method:'PUT',
    headers: {
        'Content-Type':'applicaton/json'
    },
    body: JSON.stringify(
        {
            firstName: "user3",
            lastName: "webdev3",
            email: "user3@gmail.com",
            likes:50

        }
    )
})
.then(res=> {
   
})
     

.then(data=>console.log(data))
.catch(error=>cosole.log('ERROR'));

