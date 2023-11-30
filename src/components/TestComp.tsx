// file with both use server and use client

'use client'

import { useState } from "react"
import { fetchDataFromServer } from "@/lib/test"

function ClientSideCompoent() {
    const [data, setData] = useState('')
    // useState returns an array. 

    console.log('this is running on the client')

    async function handleClick() {
        const serverData = await fetchDataFromServer()
        setData(serverData)
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch data from server</button>
            <h2>Client side component</h2>
            <p>Data: {data}</p>
        </div>
    )
}


export default function TestComp() {
    return (
        <div>
            <h1>My test comp</h1>
            <ClientSideCompoent />
        </div>
    )
}
