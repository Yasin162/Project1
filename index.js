// const comments = [
//     {name: 'name 1', email: 'email 1', comments: 'comments 1'},
//     {name: 'name 2', email: 'email 2', comments: 'comments 2'},
//     {name: 'name 3', email: 'email 3', comments: 'comments 3'}
// ];
// const nameInput = () => document.getElementById('name');
// const emailInput = () => document.getElementById('email');
// const commentInput = () => document.getElementById('comment')

// const sendComment = () => {
// let comment = {
//     name: nameInput().value,
//     email: emailInput().value,
//     comment: commentInput().value
// }
// fetch('http://localhost:3000/comments', {
// method: 'POST',
// headers: {
//     'Accept': 'application/json'
//     //"Content-Type": 'application/json'
// },
// body: JSON.stringify(comment)
// })
// }
// {"name": "name 1", "email": "email 1", "comments": "comments 1"}]
const form = document.getElementById('form');
const pulldwn = document.getElementById('pulldwn');
const ul = () => document.querySelector('ul');
document.addEventListener('DOMContentLoaded', () => {
//add afunction....................
fetchComment();
})
//fetch.............................................................
const fetchComment = () => {
    fetch('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(list => {
        displayUl(list)
    })
}
const displayUl = list => {
    list.forEach(comments => displayUls(comments))
}
const displayUls = comments => {
    const li = document.createElement('li')
    li.innerText = `Name:${comments.name} > Email:${comments.email} > Comments/Concerns:${comments.comment}`

    ul().appendChild(li);
}
//...................................................................
//POST
form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const comment = document.getElementById('comment').value
    const data = {name: name, email: email, comment: comment};
    
    fetch('http://localhost:3000/comments', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)})
        .then( response => response.json())
        .then(comment => displayUls(comment))
        
        
    })
    //click event
    pulldwn.addEventListener('click', function(e) {
        document.getElementById('about').innerHTML = "ComplexC Cleaning is a mobile car cleaning service. We help maintain the interior of your car from minor scratches and keep the car smelling fresh for longer periods of time.";})
        
        