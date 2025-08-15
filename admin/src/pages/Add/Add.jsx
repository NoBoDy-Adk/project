import React,{useState} from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    category:"Salad",
    price:""
  })
  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formdata=new FormData();
    formdata.append("image",image);
    formdata.append("name",data.name);
    formdata.append("description",data.description);
    formdata.append("category",data.category);
    formdata.append("price",Number(data.price));
    const response=await axios.post(`${url}/api/food/add`,formdata);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        category:"Salad",
        price:""
      })
      setImage(false);
      toast.success(response.data.message)
    }else{toast.error(response.data.message)}
  }
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter product name' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Enter product description' required/>
        </div>
        <div className="add-category-price ">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="cake">cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='Enter product price' required/>
          </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add
