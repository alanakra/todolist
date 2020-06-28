import React from 'react';

function Todo (props){
 return (
     <li className="list-group-item d-flex justify-content-between">
      <div>
         <input type="checkbox" id={'t'+props.id} checked={props.tache.faite} onChange={() => props.onCheck(props.tache)} />{' '}
         <label htmlFor={'t'+props.id} className="mb-0">{props.tache.intitule}</label>
      </div>
         <button className="btn btn-danger" onClick={() => props.onDelete(props.tache)}>Supprimer</button>
     </li>
 )
}

export default Todo;