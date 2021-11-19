function TodoList({ data, handleToggle }) {
    console.log(data);
  
    return (
      <div>
        {data.map((item) => {
          return (
            <>
              <div className="items" >
              <div key={item.id}>
                {item.title} - {item.description} -{" "}
                {item.status ? "DONE" : "PENDING"}
              </div>
              <button className="toggle-btn" onClick={() => handleToggle(item.id)}>Change Status</button>
              </div>
            </>
          );
        })}
      </div>
    );
  }
  
  export default TodoList;
  
  // JSX
  // null / undefined / boolean
  //
// const TodoList = (data) =>{
//     return <div>

//     </div>
// }

// export default TodoList;