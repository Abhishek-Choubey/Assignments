import axios from 'axios'
import { useState, useEffect } from "react"
import { AddEmployee } from './AddEmployee'
export function ShowEmployee() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getData()
    }, [])
    function getData() {
        axios.get("http://localhost:8000/employee").then((res) => {
            setData(res.data)
        })
    }
    return <>
    <AddEmployee getData={getData} />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Adress</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Marital Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e) => 
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.department}</td>
                        <td>{e.salary}</td>
                        <td>{e.married}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}