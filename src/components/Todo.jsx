import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import Statistics from './Statistics';
import TodoForm from './TodoForm';

export default function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos:v1');
        let initialValue;
        if (!saved) return [];
        try {
            initialValue = JSON.parse(saved);
        } catch (error) {
            console.error(error);
            return [];
        }
        return initialValue || [];
    });

    const addNewTodo = () => {
        const newItem = {
            id: crypto.randomUUID(),
            title: input,
            completed: false,
        };
        setTodos([...todos, newItem]);
        setInput('');
    };

    const toggleCompleted = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        setTodos(newArray);
    };

    let totalCount = todos?.length;
    let completedCount = todos.filter((todo) => todo.completed).length;
    let pendingCount = todos.length - completedCount;

    useEffect(() => {
        localStorage.setItem('todos:v1', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='bg-slate-100 dark:bg-dark-bg flex justify-center items-center min-h-screen p-5'>
            <div className='border shadow-teal-300 shadow-md max-w-2xl w-full p-6 rounded-lg dark:bg-gray-800 dark:text-gray-300'>
                <h1 className='text-4xl font-mono font-extrabold py-3 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue'>
                    ✨ TODO-List
                </h1>

                {/* Todo Form */}
                <TodoForm
                    input={input}
                    setInput={setInput}
                    addNewTodo={addNewTodo}
                />

                {/* Tasks List */}
                <div
                    id='taskList'
                    className='my-6 grid grid-rows-auto grid-cols-3 items-center gap-3'
                >
                    <TaskList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                </div>

                {/* Stats */}
                <Statistics
                    totalCount={totalCount}
                    pendingCount={pendingCount}
                    completedCount={completedCount}
                />
            </div>
        </div>
    );
}
