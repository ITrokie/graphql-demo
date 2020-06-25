const { todoList } = require('./constant')

const resolvers = {
    MyQuery: {
        todos: () => todoList,
        todo: (_, { id }) => todoList.find(item => item.id == id),
        lastTodo: () => todoList[todoList.length - 1]
    },
    Todo: {
        id: item => item.id,
        text: text => text.text,
        done: item => item.done,
    }
};

module.exports = resolvers