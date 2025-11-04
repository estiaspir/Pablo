alert('Hi, enjoy your coffee')
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-card-container]")
const searchInput = document.querySelector("[data-search]")
let users = [];

fetch('http://localhost:3000/USERS?_sort=-likes')
.then(res=>res.json())
.then(data=>{
    users = data.map(user=>{
         const card = userCardTemplate.content.cloneNode(true).children[0]
         const header = card.querySelector("[data-header]");
         const body = card.querySelector("[data-body]");
         header.textContent = user.firstName;
         body.textContent = user.email;
         userCardContainer.append(card)
  
   return {firstName: user.firstName, email: user.email, element:card}
    })
   
})

searchInput.addEventListener('input', (e)=>{
    let value = e.target.value;
    console.log(users);
    document.querySelector('.thesearch').textContent = value;
    users.forEach(user=>{
        const isVisible = user.firstName.includes(value) || user.email.includes(value)
            user.element.classList.toggle("hide", !isVisible)
    })
})
