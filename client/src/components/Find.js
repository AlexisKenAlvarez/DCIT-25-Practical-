import React from 'react'
import { useState } from 'react'

const Find = () => {
    const [users, setUsers] = useState()
    const [firstName, setFirst] = useState()

    const handleFind = () => {
        fetch(`${process.env.REACT_APP_URL}/find`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName
            })
        }).then((response) => {
            return response.json()
        }).then((response) => {
            setUsers(response.data)
        })
    }

    const handleFirst = (e) => {
        setFirst(e.target.value)
    }


    return (
        <>
            <div className='flex flex-col gap-y-3'>
                <p>Enter firstname</p>
                <div className='flex w-full'>
                    <input type="text" className='outline-none p-2 w-full' value={firstName} onChange={handleFirst}></input>
                    <div className='flex justify-center items-center px-6 bg-slate-500 text-white font-bold cursor-pointer hover:bg-slate-600' onClick={handleFind}>Find</div>
                </div>

                <div className='mt-6'>

                    {users !== undefined ? <div className='bg-slate-100 flex flex-col gap-y-2 p-2'>
                        <p>First Name: {users?.firstName}</p>
                        <p>Last Name: {users?.lastName}</p>
                        <p>Age: {users?.age}</p>
                    </div> : null}



                </div>

            </div>
        </>
    )
}

export default Find