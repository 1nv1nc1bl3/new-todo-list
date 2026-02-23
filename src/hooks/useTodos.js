import { useState, useEffect } from 'react';

export function useTodos() {
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

    useEffect(() => {
        localStorage.setItem('todos:v1', JSON.stringify(todos));
    }, [todos]);

    const addNewTodo = () => {
        const newItem = {
            id: crypto.randomUUID(),
            title: input,
            completed: false,
        };
        setTodos([...todos, newItem]);
        setInput('');
    };

    const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        setTodos(newArray);
    };

    const toggleCompleted = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    let totalCount = todos?.length;
    let completedCount = todos.filter((todo) => todo.completed).length;
    let pendingCount = todos.length - completedCount;

    return {
        todos,
        input,
        setInput,
        addNewTodo,
        deleteTodo,
        toggleCompleted,
        totalCount,
        completedCount,
        pendingCount,
    };
}
