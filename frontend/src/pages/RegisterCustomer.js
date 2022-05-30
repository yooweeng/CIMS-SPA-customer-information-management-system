import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddCustomer() {

  const [customerId, setCustomerId] = useState('')
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [contactNo, setContactNo] = useState('')

  function register(){
    fetch('http://localhost:5000/api/v1/customer',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
              'customer_id': customerId,
              'fname': fname,
              'lname': lname,
              'email': email,
              'contact_no': contactNo
          }
      )
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <>
      <div className='container my-5 p-5 w-50 shadow-lg skyblue-bg'>
        <h1>Register Customer</h1>
        <form>
          <div className="mt-4 mb-4">
            <label className="form-label">Customer Id</label>
            <input type="text" className="form-control w-50" value={customerId} onChange={e => setCustomerId(e.target.value)}/>
            {(customerId == '') &&
              <div className="form-text text-danger">
                ** Customer Id missing
              </div>
            }
          </div>
          <div className="mb-4">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control w-50" value={fname} onChange={e => setFname(e.target.value)}/>
            {(fname == '') &&
              <div className="form-text text-danger">
                ** First name missing
              </div>
            }
          </div>
          <div className="mb-4">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control w-50" value={lname} onChange={e => setLname(e.target.value)}/>
            {(lname == '') &&
              <div className="form-text text-danger">
                ** Last name missing
              </div>
            }
          </div>
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control w-75" value={email} onChange={e => setEmail(e.target.value)}/>
            {(email == '') &&
              <div className="form-text text-danger">
                ** Email missing
              </div>
            }
            {(!email.includes('@')) &&
              <div className="form-text text-danger">
                ** Not a proper email format '@' missing
              </div>
            }
            {(!email.includes('.')) &&
              <div className="form-text text-danger">
                ** Not a proper email format '.' missing
              </div>
            }
          </div>
          <div className="mb-4">
            <label className="form-label">Contact Number</label>
            <input type="text" className="form-control w-75" value={contactNo} onChange={e => setContactNo(e.target.value)}/>
            <div className="form-text">preferred format: xxx-xxxxxxx</div>
            {(!contactNo.includes('-')) &&
              <div className="form-text text-danger">
                ** Symbol '-' missing
              </div>
            }
          </div>
          {(customerId == '' || fname == '' || lname == ''  || email == '' || !email.includes('@') || !email.includes('.') || contactNo == '' || !contactNo.includes('-'))
            ? <>
                <p className='text-danger'>
                  ** Missing information form cannot be submit
                </p>
              </>
            : <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTarget" onClick={register}>
                  Register
                </button>
              </>
          }
         
          <div className="modal fade" id="modalTarget">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Customer Registered</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  The customer has been successfully registered.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <Link to='/'>
                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Navigate to home</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCustomer
