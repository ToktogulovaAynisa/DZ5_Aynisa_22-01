const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const clear = document.createElement('button')
        const reduct = document.createElement('button')


        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        clear.setAttribute('class', 'delete_button')
        reduct.setAttribute('class', 'edit_button')
        clear.innerText = 'delete'
        reduct.innerHTML = 'edit'
        text.innerText = input.value

        div.append(text)
        div.append(clear)
        div.append(reduct)
        todoList.append(div)

        clear.addEventListener('click', () => {
            todoList.removeChild(div)
        })
        reduct.addEventListener('click', () =>{
            var reducted = prompt(">")
            text.innerHTML = reducted
        })
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)