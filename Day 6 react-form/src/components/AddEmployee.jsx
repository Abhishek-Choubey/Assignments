import axios from "axios"
import { useState } from "react"
export function AddEmployee(props) {
    const [formdata, setFormdata] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        married: ""
    })


    function handleChange(e) {
        const { id, value } = e.target;
        setFormdata({ ...formdata, [id]: value })
    }
    const getData = props.getData;
    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:8000/employee", formdata).then(() => {
            alert("User created");
            getData()
            setFormdata({
                name: "",
                age: "",
                address: "",
                department: "",
                salary: "",
                married: ""
            })
        })
    }

                
    return <>

        <div className="container">
            <h1>Add Form</h1>
            <form onSubmit={handleSubmit}>
                <input value={formdata.name} onChange={handleChange} type="text" id="name" placeholder="Name" /><br />
                <input value={formdata.age} onChange={handleChange} type="text" id="age" placeholder="Age" /><br />
                <input value={formdata.address} onChange={handleChange} type="text" id="address" placeholder="Address" /><br />
                <label>Department</label>&nbsp;
                <select id="department" onChange={handleChange} defaultValue={'department'}>
                    <option value="department" disabled>Department</option>
                    <option value="hr">HR</option>
                    <option value="management">Management</option>
                    <option value="technical">Technical</option>
                </select><br />
                <input value={formdata.salary} onChange={handleChange} type="number" id="salary" placeholder="Salary" /><br />
                <label>Marital Status: </label>
                <label>married</label>
                <input onChange={handleChange} checked={formdata.married} type="checkbox" id="married" /><br />
                <input type="submit" placeholder="Submit" /><br />
            </form>
        </div>
    </>
}