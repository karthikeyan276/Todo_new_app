import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Todo_task(props) {

    const[task,setAddtask]=useState("")
    const[gettask,setgettask]=useState([])
    const[refresh,setRefresh]=useState(false)
    const[status,setStatus]=useState([])
    const[importedn_data,setImportentdata]=useState([])
    const[update,setUpdate]=useState(true)
    const[id_1,setId_1]=useState("")
    const [check,setCheck]=useState([])
    const[reload,setReload]=useState([])
const [defaults,setDefaults]=useState('initial')


console.log("dsdsds",defaults)

console.log("status",status)

console.log("importedn_data",importedn_data)

console.log("check",check)

const datas = props.name
console.log("dataall",datas)


const addtask_s = (e)=>{
  
    // window.location.reload(true);
    e.preventDefault();
    Axios.post(`http://localhost:9001/addtask`,{
        task:task,
        id_1:id_1

    }).then((response)=>{
        console.log("success")
        setAddtask(...task,response.data.results)
      
    })
    
}

// const Show_task = (e)=>{


//     Axios.get(`http://localhost:9001/getdata`,{
      
//     }).then((response)=>{
//         console.log("success")
//         setgettask(response.data.results)

//     })
// }

const status_id = ()=>{
  Axios.get(`http://localhost:9001/addtask_2`,{

            }).then((response)=>{
                console.log("sucess", response.data.results)
                // setStatus([...response.data.results])
                setgettask(response.data.results)
                
            })
            setUpdate(!update)
}

const updateimportent = (id,id_1)=>{
  // window.location.reload(true);
  Axios.put(`http://localhost:9001/updatefalse`,{
    id:id,
    id_1:id_1

    
  }).then((response)=>{
    console.log("updateimportent", response.data.results)
    // setStatus(response.data.results)
    // setImportentdata(response.data.results)
    console.log("setImportentdata",response.data.results)
    // setUpdate(!update)
})
}
const importent_datas = ()=>{
  Axios.get(`http://localhost:9001/importent_data`,{

            }).then((response)=>{
                console.log("sucess", response.data.results)
                // setStatus([...response.data.results])
                setImportentdata(response.data.results)
                
            })
            setUpdate(!update)
}


const complted = (reload)=>{
      console.log("ifcomple",reload)
  Axios.get(`http://localhost:9001/completed`,{
   
            }).then((response)=>{
                console.log("okkk", response.data.results)
                // setStatus([...response.data.results])
                // setImportentdata(response.data.results)
                console.log("console.",response.data.results)
                setStatus(response.data.results)
            })

            
            setUpdate(!update)
            console.log("reload",reload)
}



  
const changeto_false = (id,id_1)=>{
  // window.location.reload(true);
  Axios.put(`http://localhost:9001/getdata`,{
    id:id,
    id_1:id_1
  }).then((response)=>{
    console.log("hhh",response.data);
    console.log("kkkk",response.status);
    // setAddtask(...response.data.results)
   
  }).catch((e)=>console.log("plz chech the error :(",e));
}

const handleChange =(id_1,id) =>{
  console.log("iddddd",id_1)
  setReload(id_1)
   
    Axios
            .put('http://localhost:9001/addtask_1', {
              id
            })
            .then((response) => {
                console.log("gvdgvdgvfdg",response.status);
                console.log("yyyy",response.data.results);
                // setCheck(response.data.results)
            })
            .catch((e) => console.log('something went wrong :(', e));
            console.log("completed",id_1)
          
            
        }





const importent = (id,id_1)=>{
  

  Axios.put(`http://localhost:9001/importent`,{
    id
  }).then((response)=>{
    console.log("sucessedimportent", response.data.results)
    // setImportentdata([...response.data.results])
    // setImportentdata(response.data.results)

})
.catch((e) => console.log('something went wrong :(', e));
console.log(id_1)
}

const delet = (id,index)=>{
  Axios.delete(`http://localhost:9001/delete/${id}`,{
    
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
    const rows = [...status];
    rows.splice(index,1);
    setStatus(rows)
})
.catch((e) => console.log('something went wrong :(', e));
console.log(id)
}


// const checkall = ()=>{
//   const datas = props.name
//   console.log("datasall",datas)
//   // setCheck(datas)
// }

useEffect((reload)=>{
 
    Axios.get(`http://localhost:9001/addtask_2`,{
      
    }).then((response)=>{
        console.log("alldata",response.data.results)
        // console.log("reloaddata",reload)
        setgettask([response.data.results])

    

      
    })
  
  complted([reload]);
  status_id();
  importent();
  importent_datas()
   
  setDefaults(reload)   

  
  
    
},[defaults])




// const datas = props.name

// setCheck(datas)

// console.log("datasall",datas)

  return (
    <div>
      
        <div>

            <TextField sx={{mt:2,width:1200}}
          id="filled-textarea"
          label="User_id"
          placeholder="User_id"
          multiline
          variant="filled"
          color="success" 
          onChange={(event)=>{setId_1(event.target.value)}}
        /><br/>
         <TextField sx={{mt:2,width:1200}}
          id="filled-textarea"
          label="Add Task"
          placeholder="Add Task"
          multiline
          variant="filled"
          color="success" 
          onChange={(event)=>{setAddtask(event.target.value)}}
        />
        <Button onClick={complted}>check</Button>
        </div>
        
        <Button sx={{mt:1}} onClick={addtask_s} variant='contained' color="success">Add task</Button>
     {/* {console.log("hhhdsds",props.name)} */}

{
    <Box sx={{ flexGrow: 1,mt:4 , ml:1,mr:1,mb:1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {datas.map((val,key) => (
          <Grid item xs={2} sm={6} md={12} key={key}>
            <Item sx={{background:"#abefe1"}}>
          <h1>  Task:  {val.task}   id: {val.id}   id_1:{val.id_1} </h1>
            <Button variant='contained' onClick={()=>handleChange(val.id_1,val.id)} >completed</Button> 
            <Button sx={{ml:1}} variant='contained' onClick={()=>importent(val.id,val.id_1)} color="error">importent</Button> 
            <Button sx={{ml:1}} variant='contained' onClick={()=>delet(val.id,val.index)} color="error">Delete </Button>
            
           
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>}



    {
      
    <Box sx={{ flexGrow: 1,mt:4 , ml:1,mr:1,mb:1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {status.map((val,key) => (
          <Grid item xs={2} sm={6} md={6} key={key}>
            <Item sx={{background:"#b9f5be"}}>
          <h1>  Task:  {val.task}   id: {val.id}</h1>
            <Button variant='contained' color="error" onClick={()=>changeto_false(val.id,val.id_1)} >uncompleted</Button>  
            
           
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>}
            <h1>importent</h1>
    {
      
      <Box sx={{ flexGrow: 1,mt:4 , ml:1,mr:1,mb:1}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {importedn_data.map((val,key) => (
            <Grid item xs={2} sm={6} md={6} key={key}>
              <Item sx={{background:"lightblue"}}>
            <h1>  Task:  {val.task}   id: {val.id}</h1>
              <Button variant='contained' color="error" onClick={()=>updateimportent(val.id,val.id_1)} >unimportent</Button>  
              
             
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>}
        <div>
            {/* <Button variant='contained' onClick={Show_task}>Show task </Button> */}
        </div>
    </div>
  )
}

export default Todo_task