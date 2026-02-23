import { memo } from 'react';

export default memo(function Task({ todo, toggleCompleted, deleteTodo }) {
    const { id, title } = todo;
    return (
        <>
            <input
                type='checkbox'
                className='peer h-5 w-5 cursor-pointer transition-all  rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#00f5ff] checked:border-[#00f5ff]'
                checked={todo.completed ? true : false}
                onChange={() => toggleCompleted(id)}
            />
            <p className={`${!todo.completed ? '' : 'line-through'}`}>
                {title}
            </p>
            <button className='cursor-pointer' onClick={() => deleteTodo(id)}>
                ✖️
            </button>
        </>
    );
});
