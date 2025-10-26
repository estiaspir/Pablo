const myusers = document.querySelector('.myusers');

const renderUsers = async()=>{
    let uri = 'http://localhost:3000/USERS?_sort=likes&_order=desc';
    const res = await fetch(uri);
    const users = await res.json()
    console.log(users);
    let template = '';
    users.forEach(user => {
        template+= `
        <div class="user">
        <a href="details.html?id=${user.id}"><h3>${user.firstName + ' ' + user.lastName }</h3></a> 
       
        <p>${user.email}</p>
        <p>${user.lat + " " + user.long}</p>
       
        </div>
        `
    });

    myusers.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', ()=>{
    renderUsers()
})

