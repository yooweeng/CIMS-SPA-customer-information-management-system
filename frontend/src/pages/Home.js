import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Main.css'

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/customer')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  function deleteCustomer(id){
    fetch(`http://localhost:5000/api/v1/customer/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <>
      <div className='container mt-5'>
        <h1>Registered Customers List</h1>
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => {
              return(
                <tr key={index}>
                  <th scope ='row'>{index +1}</th>
                  <td className='position-relative'><Link to={`/viewcustomer/${item.customer_id}`} className='stretched-link no-link-underline'>{item.customer_id}</Link></td>
                  <td className='position-relative'><Link to={`/viewcustomer/${item.customer_id}`} className='stretched-link no-link-underline'>{item.fname}</Link></td>
                  <td className='position-relative'><Link to={`/viewcustomer/${item.customer_id}`} className='stretched-link no-link-underline'>{item.lname}</Link></td>
                  <td>
                    <Link to={`/viewcustomer/${item.customer_id}`}>
                      <button type="button" className="btn btn-success">View</button>
                    </Link>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalTarget" onClick={() => deleteCustomer(item.customer_id)}>
                      Delete
                    </button>
                    <div className="modal fade" id="modalTarget">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Customer Removed</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          <div className="modal-body">
                            The customer has been successfully removed and deleted.
                          </div>
                          <div className="modal-footer">
                            <a href='/'>
                              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Done</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
