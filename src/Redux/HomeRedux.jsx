import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, removeData } from './dataSlice';
const initialForm={
    name:"",
    price:null,
    stock:null,
    id:null
};
const HomeRedux = () => {
    const dispatch=useDispatch();
    const products=useSelector(store=>store.dataS.products);
    console.log(products);

    const [formData,setFormData]=useState(initialForm);
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        dispatch(addData(formData));
    }
    const handleDelete=(item)=>{
        dispatch(removeData(item.id));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Enter ID</label> 
            <input type="text" id="id" name="id" onChange={handleChange}/> <br />
            <label htmlFor="name">Enter Name</label>
            <input type="text" id="name" name="name" onChange={handleChange}/> <br />
            <label htmlFor="price">Enter Price</label>
            <input type="text" id="price" name="price" onChange={handleChange}/> <br />
            <label htmlFor="stock">Stock</label>
            <input type="text" id="stock" name="stock" onChange={handleChange}/> <br />
            <button type="submit">Submit</button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>

      {
        products.map((item,index)=>(
        <tr key={index}>
            <td>{item.id}</td>
             <td>{item.name}</td>
            <td>{item.price}</td>
             <td>{item.stock}</td>
             <td onClick={()=>handleDelete(item)}>Delete</td>
        </tr>
        ))
      }
            </tbody>

        </table>

    </div>
  )
}

export default HomeRedux
