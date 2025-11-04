const myusers = document.querySelector('.myusers');
const searchForm = document.querySelector('.search')

const renderUsers = async(term)=>{
    let uri = 'http://localhost:3000/USERS?_sort=-likes';
	 if (term) {
    uri += `&firstName=${term}`
    alert('Have a nice day ' + term)
  }
    const res = await fetch(uri);
    const users = await res.json()
    console.log(users);
    let template = '';
    users.forEach(user => {
        template+= `
        <div class="user">
        <a href="details.html?id=${user.id}&likes=${user.likes}"><h3>${user.firstName + ' ' + user.lastName }</h3></a> 
       
        <p>${user.email}</p>
        <p>${user.lat + " " + user.long}</p>
       
        </div>
        `
    });

    myusers.innerHTML = template;
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderUsers(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', ()=>{
    renderUsers()
})

