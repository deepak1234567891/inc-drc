import React, { useState } from 'react'; 
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@material-ui/core/Button';


const TodoList = () => {

    const [num, setNum] = useState(0)

    const inNum = () => {
        setNum(num + 1);
    }
    // const deNum = () => {
    //     setNum(num - 1);
    // }
    const deNum = () => {
        if(num > 0){
            setNum(num - 1);
        }else {
            alert("sorry, Negative numbers not Allowed") 
            setNum(0);
    }
    }
    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                 
                 
                    <h1 className="d-flex justify-content-center display-1  shadow p-3  "> {num} </h1>
                    <div className=' d-flex justify-content-center'> 

                        <Button className='w-30 h-30' style={{color:'red'}} onClick={deNum}><DeleteIcon /></Button> 
                        <br/>
                        <Button size="large" style={{color:'green'}}  onClick={inNum}><AddIcon /></Button>
                        
                    
                    </div>
                </div>
            </div>
        </> 
    )
} 

export default TodoList;