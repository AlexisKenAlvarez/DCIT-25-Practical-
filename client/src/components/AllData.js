import React from 'react'
import { useEffect, useState } from 'react'

const AllData = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/users`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            setUsers(response.data)
        })
    }, [])


    return (
        <>
            <div className='flex flex-col gap-y-3'>

                {users && users.map((items) => {
                    return (
                        <div className='bg-slate-100 flex flex-col gap-y-2 p-2' key={items._id}>
                            <p>First Name: {items.firstName}</p>
                            <p>Last Name: {items.lastName}</p>
                            <p>Age: {items.age}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AllData