import React, {useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [inputCount, setInputCount] = useState(0)

    return (
        <div className="flex flex-col gap-2 p-2 m-2">
            <h1 className='text-3xl'>Counter</h1>
            <p>Counter is {count}</p>
            <div className='p-1 flex gap-5'>
            <button onClick={()=>setCount(count+1)} className='bg-black text-white px-2 py-1 rounded '>Increase</button>
            <button onClick={()=> count>0 && setCount(count-1)} className='bg-black text-white px-2 py-1 rounded '>Descrease</button>
            <button onClick={()=>setCount(0)} className='bg-black text-white px-2 py-1 rounded '>Reset</button>
            </div>
            <div>
                <input onChange={(e)=> setInputCount(Number(e.target.value)) } className='px-2 py-1 border m-3' type='text' value={inputCount} />
                <button onClick={()=>setCount(inputCount)} className='bg-black text-white px-2 py-1 rounded '>Set to {inputCount}</button>
            </div>
        </div>
    )
}

export default Counter