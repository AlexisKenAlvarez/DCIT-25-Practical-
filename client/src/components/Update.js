import React from 'react'
import { useEffect, useState } from 'react'

const Update = () => {
    const [firstName, setFirst] = useState()
    const [newName, setNew] = useState()
    const [success, setSuccess] = useState(false)


    const handleUpdate = () => {
        fetch(`${process.env.REACT_APP_URL}/update`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                newName
            })
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.message === "Success") {
                setSuccess(true)
                setFirst('')
                setNew('')
                setTimeout(() => {
                    setSuccess(false)
                }, 2000);

            }
        })
    }

    const handleFirst = (e) => {
        setFirst(e.target.value)
    }

    const handleNew = (e) => {
        setNew(e.target.value)
    }


    return (
        <>
            <div className='flex flex-col gap-y-3'>
                <p>Enter firstName</p>
                <div className='flex w-full'>
                    <input type="text" className='outline-none p-2 w-full' value={firstName} onChange={handleFirst} required></input>
                </div>

                <p>Enter new first name</p>
                <div className='flex w-full'>
                    <input type="text" className='outline-none p-2 w-full' value={newName} onChange={handleNew} required></input>
                    <div className='flex justify-center items-center px-6 bg-slate-500 text-white font-bold cursor-pointer hover:bg-slate-600' onClick={handleUpdate}>Update</div>
                </div>

                {
                    success ? <p className='text-center mt-10 text-lg font-bold text-green-700'>Success!</p> : null
                }
                

            </div>
        </>
    )
}

export default Update