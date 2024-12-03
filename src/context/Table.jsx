import React from 'react'
import { useAppContext } from './contextProvider.jsx'

const Table = () => {
    const{data}=useAppContext();
  return (
    <div>
      <h1>The Employees Details</h1>
      <table border='1'>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Department</td>
            </tr>
        </thead>
        <tbody>
        {
        data.map((item,index)=>(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.dept}</td>
            </tr>
        ))
      }
        </tbody>
      </table>
      
    </div>
  )
}

export default Table
