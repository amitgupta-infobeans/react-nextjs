import React from 'react'
import { useCounterWithZustand } from '../store/counter_store'

const CounterWithZustand = () => {
    const { count, decrease, reset, increase } = useCounterWithZustand()
    return (<div className='p-10 flex flex-col items-center justify-center'>
        <div className='p-2 text-orange-500 text-2xl'>CounterWithZustand</div>
        <div className='text-lg p-2'>Count: {count}</div>
        <div className='flex gap-1 mt-5'>
            <button className='mr-2 px-4 py-2 bg-black text-white' onClick={increase}>+</button>
            <button className='mr-2 px-4 py-2 bg-black text-white' onClick={decrease}>-</button>
            <button className='px-4 py-2 bg-black text-white' onClick={reset}>Reset</button>
        </div>
    </div>
    )
}

export default CounterWithZustand