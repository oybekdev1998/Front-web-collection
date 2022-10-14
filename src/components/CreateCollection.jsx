import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {BaseURl} from "../AxiosApi";
import {connect} from "react-redux";
import axios from "axios";
import CategoryReducer,{getcategory} from "../reducers/CategoryReducer";
import CollectionReducer,{saveCollection} from "../reducers/CollectionReducer";
import {useNavigate} from "react-router-dom";

function CreateCollection({getcategory,CategoryReducer,saveCollection}) {

   useEffect(()=>{
       getcategory()
   },[])
    const [Inputs,setInputs] = useState([{title:'',desc:'',photo:''}])
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [category,setCategory] = useState('')

    function handleformchange(index,e){
        let data = [...Inputs]
        data[index][e.target.name] = e.target.value
        setInputs(data)
    }
   async  function imagefile(index,e){
        const data = new FormData();
        data.append('file', e.target.files[0]);
        await axios.post(`${BaseURl}/images/upload`,data)
            .then(res=>{
                const  {name} = res.data.object
                let data = [...Inputs]
                data[index]['photo'] = name
                setInputs(data)
            }).catch(err=>{
                console.log(err)
            })
    }
    let navigate = useNavigate()


    function addFields(){
            let newField = {name:'',desc:'',photo:''}
            setInputs([...Inputs,newField])
    }
    function submit(e){
       let a = localStorage.getItem('userObject')
        const  {_id} = JSON.parse(a)
        console.log(_id)
        e.preventDefault()
            saveCollection({
                    name:title,
                    desc:desc,
                categoryId:category,
                    items:Inputs,
                    authorId:_id
            })
        navigate('/collections')
    }
    function removeFields(index){
        let data = [...Inputs]
        data.splice(index,1)
        setInputs(data)
    }




    return (
        <div className={'p-10 bg-blue-900'}>
            <p className="text-4xl font-medium text-center mb-14 text-gray-900 dark:text-white">Create new Collection</p>

            <div className={'grid grid-cols-4 mb-6 gap-3'}>
                <div className={'rounded border-4 p-4 border-gray-900'}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Collection Title
                        </label>
                        <input type="text" id="title" onChange={e=>setTitle(e.target.value)} value={title}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="desc"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Collection
                            description</label>
                        <input type="text" id="desc" onChange={e=>setDesc(e.target.value)} value={desc}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required=""/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an
                            option</label>
                        <select id="category" name={'category'} onChange={e=>setCategory(e.target.value)} value={category}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                CategoryReducer.category.map(item=>
                                <option value={item._id}>{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className={'rounded border-4 p-4 col-span-3  border-gray-900'}>
                    <p className="text-xl font-medium text-center mb-4 text-gray-900 dark:text-white">Item</p>
                    <form className={'grid grid-cols-3 gap-3 mb-4 flex flex-wrap'} onSubmit={submit} >
                        {Inputs.map((input, index) => {
                            return (
                                <div key={index} className={'grid grid-cols-2 gap-3 p-2 col-span-1 border-2 border-gray-900'}>
                                    <div>
                                        <div className="mb-1">
                                            <label htmlFor="title"   className="text-center block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Title
                                            </label>
                                            <input type="text" id="title" name={'title'} onChange={(e)=>handleformchange(index,e)}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="desc" className="text-center block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Description
                                            </label>
                                            <input type="text" id="desc" name={'desc'} onChange={(e)=>handleformchange(index,e)}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                htmlFor="file_input">Upload file</label>
                                            <input
                                                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                id="file_input" onChange={(e)=>imagefile(index,e)} type="file"/>

                                        </div>



                                        <button type={'button'} className={'text-white bg-blue-700 float-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'}
                                            onClick={()=>removeFields(index)}>remove</button>
                                    </div>
                                    <div>
                                        <img src={input.photo === ""  ? "https://www.idealchoob.ir/wp-content/uploads/2017/02/default-placeholder-1024x1024-570x760.png":BaseURl+input.photo} alt=""/>
                                    </div>
                                </div>
                            )
                        })}
                    </form>
                    <button className={'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'} onClick={addFields}>Add more...</button>
                </div>
            </div>




                <button onClick={submit} type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Collection
                </button>

        </div>
    );
}

export default connect((CategoryReducer,CollectionReducer),{getcategory,saveCollection}) (CreateCollection);
