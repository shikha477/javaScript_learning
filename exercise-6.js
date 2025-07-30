const title = document.getElementById('title');
const desc = document.getElementById('desc');
const todo = document.getElementById('todo');
const submit = document.getElementById('submit');
const deleteBtn = document.getElementById('deleteBtn');


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const titlec = title.value
    const descc = desc.value
    localStorage.setItem('todo', JSON.stringify({ title: titlec, desc: descc }));

    console.log(e)
    todo.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `
    title.value=""
    desc.value=""
})

deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML=""
})
