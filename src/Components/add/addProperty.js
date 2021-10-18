import React,{useState} from 'react'
import {storage, db} from '../../Config/Config'
import './addProperty.css'

export const AddProperty = () => {

    const [name, setName]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    const [rooms, setRooms]=useState('');
    const [image, setImage]=useState(null);

    const [imageError, setImageError]=useState('');
    
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    const types =['image/jpg','image/jpeg','image/png','image/PNG'];
    const handlePropertyImg=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }
            else{
                setImage(null);
                setImageError('please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('please select your file');
        }
    }

    const handleAddProperty=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`property-images/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref('property-images').child(image.name).getDownloadURL().then(url=>{
                db.collection('Properties').add({
                    name,
                    description,
                    rooms: Number(rooms),
                    price: Number(price),
                    url
                }).then(()=>{
                    setSuccessMsg('Property added successfully');
                    setName('');
                    setDescription('');
                    setPrice('');
                    setRooms('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                    setSuccessMsg('');
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        })
    }
  
    return (
    <>
           <div className="addheader">
        <form autoComplete="off" className='addpropertyform' onSubmit={handleAddProperty}>
            <br/><br/>
                 <h1 style={{textAlign:'center'}} >Add Property</h1>
                  
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div> 
                <br></br>
            </>} 
            <br/><br/><br/><br></br> 
                <label>Property Name</label><br/>
                <input type="text" className='form-control' required
                onChange={(e)=>setName(e.target.value)} value={name}></input>
                <br></br><br/>
                <label>Property Description</label><br/>
                <input type="text" className='form-control' required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br><br/>
                <label>Number of rooms</label><br/>
                <input type="text" className='form-control' required
                onChange={(e)=>setRooms(e.target.value)} value={rooms}></input>
                <br></br><br/>
                <label>Property Price</label><br/>
                <input type="number" className='form-control' required
                onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                <br></br><br/>
                <label>Upload Property Image</label><br/>
                <input type="file" id="file" className='form-control' required
                onChange={handlePropertyImg}></input>
                
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                   
                </>}
                <br></br><br/><br></br> 
                    <button type="submit" className='addbtn'>
                        ADD PROPERTY
                    </button>
                
                {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
                    
                </>}
            </form>
           </div>
            
        </>

    )
}
