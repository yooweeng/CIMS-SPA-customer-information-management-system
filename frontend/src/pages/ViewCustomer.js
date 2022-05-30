import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewCustomer() {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [customerId, setCustomerId] = useState('')
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
  
    //on mount fetch data from api
    useEffect(() => {
      fetch(`http://localhost:5000/api/v1/customer/${id}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
          setCustomerId(data.customer_id)
          setFname(data.fname)
          setLname(data.lname)
          setEmail(data.email)
          setContactNo(data.contact_no)
        })
    }, [])
  
    return (
      <>
          <div className='container my-5 p-5 w-50 shadow-lg skyblue-bg'>
          <h1>View Customer Details</h1>
          <form>
            <div className="mt-4 mb-4">
              <label className="form-label">Customer Id</label>
              <input type="text" className="form-control w-50" value={customerId} onChange={e => setCustomerId(e.target.value)} disabled/>
            </div>
            <div className="mb-4">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control w-50" value={fname} onChange={e => setFname(e.target.value)} disabled/>
            </div>
            <div className="mb-4">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control w-50" value={lname} onChange={e => setLname(e.target.value)} disabled/>
            </div>
            <div className="mb-4">
              <label className="form-label">Email</label>
              <input type="email" className="form-control w-75" value={email} onChange={e => setEmail(e.target.value)} disabled/>
            </div>
            <div className="mb-4">
              <label className="form-label">Contact Number</label>
              <input type="text" className="form-control w-75" value={contactNo} onChange={e => setContactNo(e.target.value)} disabled/>
            </div>
            <Link to={`/editcustomer/${id}`}>
                <button type="button" className="btn btn-primary">Edit</button>
            </Link>
          </form>
        </div>
      </>
    )
}

export default ViewCustomer
