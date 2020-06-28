import React, { useState } from 'react';
import App from './App';

function MultiApps(props){

  const [appList, setAppList] = useState(['todo:un','todo:deux']);

  function ajouter(){
    appList.push(Date.now());
    setAppList([...appList]);
  }

 return(
  <div>
     <h1 className="text-white">Todolist React</h1>
       <p className="text-white">Une todolist avec React JS</p>
       <button onClick={ajouter} className="btn btn-info">Ajouter une liste</button>
      
       {appList.map(key => <App storageKey={key} key={key}/>)}
  </div>
 )
}

export default MultiApps;