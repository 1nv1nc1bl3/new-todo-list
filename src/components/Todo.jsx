import { useEffect, useState } from 'react';
import Task from './Task';

export default function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('todos list');
        const initialValue = JSON.parse(saved);
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
        localStorage.setItem('todos list', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='bg-slate-100 dark:bg-dark-bg flex justify-center items-center min-h-screen p-5'>
            <div className='border shadow-teal-300 shadow-md max-w-2xl w-full p-6 rounded-lg dark:bg-gray-800 dark:text-gray-300'>
                <h1 className='text-4xl font-mono font-extrabold py-3 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue'>
                    ✨ TODO-List
                </h1>

                {/* Todo Form */}
                <div className='flex mb-6 group'>
                    <input
                        id='taskInput'
                        type='text'
                        placeholder='Add a new task...'
                        className='flex-1 px-4 py-3 rounded-l-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300 group-hover:shadow-neon-sm'
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') addNewTodo();
                        }}
                    />
                    <button
                        id='addTaskBtn'
                        className='px-5 rounded-r-lg bg-gradient-to-r from-neon-purple to-neon-blue font-medium hover:shadow-neon transition-all duration-300'
                        onClick={() => addNewTodo()}
                    >
                        Add
                    </button>
                </div>

                {/* Task List */}
                <div
                    id='taskList'
                    className='my-6 grid grid-rows-auto grid-cols-3 items-center'
                >
                    <Task
                        todos={todos}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                </div>

                {/* Stats */}
                <div className='p-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border border-gray-300 dark:border-gray-600'>
                    <div className='flex justify-between text-sm'>
                        <div className='text-center'>
                            <div
                                id='pendingCount'
                                className='text-2xl font-bold text-neon-pink'
                            >
                                {pendingCount}
                            </div>
                            <div className='text-gray-500 dark:text-gray-400'>
                                Pending
                            </div>
                        </div>
                        <div className='text-center'>
                            <div
                                id='completedCount'
                                className='text-2xl font-bold text-neon-blue'
                            >
                                {completedCount}
                            </div>
                            <div className='text-gray-500 dark:text-gray-400'>
                                Completed
                            </div>
                        </div>
                        <div className='text-center'>
                            <div
                                id='totalCount'
                                className='text-2xl font-bold text-purple-400'
                            >
                                {totalCount}
                            </div>
                            <div className='text-gray-500 dark:text-gray-400'>
                                Total
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
