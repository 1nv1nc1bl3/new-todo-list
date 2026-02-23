export default function TodoForm({ input, setInput, addNewTodo }) {
    return (
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
    );
}
