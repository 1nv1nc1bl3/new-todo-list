import { memo } from 'react';

export default memo(function Task({ todo, toggleCompleted, deleteTodo }) {
    const { id, title } = todo;
    return (
        <div className='bg-gray-200 px-3 py-2 flex min-w-full col-gap-2'>
            <input
                type='checkbox'
                className='peer h-5 w-5 cursor-pointer transition-all  rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#00f5ff] checked:border-[#00f5ff]'
                checked={todo.completed ? true : false}
                onChange={() => toggleCompleted(id)}
            />
            <p
                className={`${!todo.completed ? '' : 'line-through'} flex-1 px-2`}
            >
                {title}
            </p>
            <button className='cursor-pointer' onClick={() => deleteTodo(id)}>
                ✖️
            </button>
        </div>
    );
});
