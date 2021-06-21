import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
    const [note,setNote]=useState({
        title:'',
        content:''
    });
    
    const handleClick = () => {
        if(note.title!==''&&note.content!==''){
        props.passNote(note);
        setNote((preval)=>{
            return{
                title:'',
                content:''
            }
        })
    }
    }

    const handleChange = (event) => {
        const {name,value}=event.target;
        setNote((preData)=>{
            return{
            ...preData,
            [name]:value,
            }
        })
    }
    const expandFun = () => {
        setExpand(true)
    }
    const backToNormal = () => {
        setExpand(false)
    }
   return(
             <div className="main_note">
                <form >
                {
                    expand?
                    <input type="text"
                     placeholder="Title" 
                     autoComplete="off" 
                     onChange= { handleChange }
                     value= {note.title}
                     name= "title"
                    />:null
                }  
                  
                    <textarea 
                        rows="" 
                        column="" 
                        placeholder="write a note..." 
                        onChange= { handleChange }
                        value={note.content}
                        name= "content" 
                        onClick = { expandFun }
                        onDoubleClick = { backToNormal }
                       >
                            
                    </textarea>
                    {
                        expand?
                    <button type="button" onClick = { handleClick } className="mybtn">
                        <AddIcon className="plus_sign"/>
                    </button>:null
                    }
                </form>
            </div>
         )
}
export default CreateNote;