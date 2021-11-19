import React,{useState} from 'react';

const TodoInput = ({onSubmit}) => {

    const [state,setState] = useState({
        title:"",
        description:""
    });

    const onFormSubmit = (e) =>{
        e.preventDefault();
        onSubmit(state);
    }

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    return(
    <form onSubmit = {(e)=>onFormSubmit(e)}>
        <div>
            <input type="submit" className="add-btn" value="➕"/>
            <input type="text" className="input-btn" placeholder="title" onChange={handleChange} name= "title" value={state.title} />
        </div>
        <div>
            <input type="text" className="input-btn btn-sec" placeholder="description" onChange={handleChange} name="description" value={state.description} />
        </div>
    </form>
    );
}


export default TodoInput;