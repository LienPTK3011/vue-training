interface Todo {
    name: string,
    completed: boolean,
    edit: boolean
}

interface Staff {
    name: string,
    age: number,
    isWorking: boolean,
    exprience: number,
    avatar: string,
    todos: Array<Todo>
}

export { Todo, Staff }