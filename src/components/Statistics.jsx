export default function Statistics({
    pendingCount,
    completedCount,
    totalCount,
}) {
    return (
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
    );
}
