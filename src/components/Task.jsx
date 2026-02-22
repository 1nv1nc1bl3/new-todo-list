export default function Task({ todos, deleteTodo, toggleCompleted }) {
    return (
        <>
            {todos.map((todo) => {
                const { id, title, completed } = todo;
                return (
                    <div key={id} className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            className='peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#00f5ff] checked:border-[#00f5ff]'
                            onClick={() => toggleCompleted(todo)}
                        />
                        <p>{title}</p>
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
