import React,{useState} from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note'
import Footer from './Footer';

const App = () =>{
    const [ addItem,setaddItem ] = useState([]);
    const handleClickFun = (note) => {
        setaddItem((preVal)=>{
            return[
                ...addItem,
                note
            ]
        })
    };
    
    const delNote = (id) => {
        setaddItem((preval)=>{
            return(
            preval.filter((val,indx)=>{
                
                return indx!==id
            })
            )
        })
        
    }
    return(
        <>
            <Header />
            <CreateNote  passNote={ handleClickFun }/>
            {
                addItem.map((val,index)=>{
                    return(
                    <Note 
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem = { delNote }
                    />
                    )
                })
            }

            <Footer />
        </>


    )
}
export default App;