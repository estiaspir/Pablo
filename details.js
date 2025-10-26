const id = new URLSearchParams(window.location.search).get('id');
console.log(id);

const renderDetails = async ()=>{
    const res = await fetch('http://localhost:3000/USERS/'+id);
    const user = await res.json();
    console.log(user);
    const template = `<h1>${user.firstName + " " + user.lastName}</h1>
                    <p>${user.details}</p>
                     <p>${user.email}</p>
                     <p>${user.likes}</p>`
                   
        document.querySelector('.thedetails').innerHTML= template

}



window.addEventListener('DOMContentLoaded', ()=>{
    renderDetails()
})