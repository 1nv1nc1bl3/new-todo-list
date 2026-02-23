import Task from './Task';

export default function TaskList({ todos, deleteTodo, toggleCompleted }) {
    return (
        <>
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className='flex items-center gap-2'>
                        <Task
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleCompleted={toggleCompleted}
                        />
                    </div>
                );
            })}
        </>
    );
}
