import React from 'react';

const TodoList = (props) => {

    return (
    <>
      <div className = "output">
         <i className = "fa fa-times" 
         aria-hidden = "true" 
         onClick = {() => {
          props.onSelect(props.id);
         }

         }
          />
         
         <li> {props.listv} </li>
      </div>
    </>
 );
}

export default TodoList;