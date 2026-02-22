export default function Task({ todos, deleteTodo, toggleCompleted }) {
    return (
        <>
            {todos.map((todo) => {
                const { id, title } = todo;
                return (
                    <div key={id} className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            className='peer h-5 w-5 cursor-pointer transition-all  rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#00f5ff] checked:border-[#00f5ff]'
                            onChange={() => toggleCompleted(id)}
                        />
                        <p
                            className={`${!todo.completed ? '' : 'line-through'}`}
                        >
                            {title}
                        </p>
                        <button
                            className='cursor-pointer'
                            onClick={() => deleteTodo(id)}
                        >
                            ✖️
                        </button>
                    </div>
                );
            })}
        </>
    );
}
