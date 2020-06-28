import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {saveToLocalStorage, loadFromLocalStorage} from './storageService';

function App(props) {
  const data = loadFromLocalStorage(props.storageKey);

  const [taches,setTaches] = React.useState(data);

  function ajouterTache(nouvelleTache) {
      if (nouvelleTache.intitule.trim() === '') {
          return; // On s'arrête là
      }
      const stateTasks = [...taches, nouvelleTache];
      setTaches(stateTasks);
      saveToLocalStorage(props.storageKey, stateTasks);
  }

  function onCheck(tacheCliquee) {
      setTaches([...taches]);
      tacheCliquee.faite = !tacheCliquee.faite;
      saveToLocalStorage(props.storageKey, taches);
  }

  function onDelete(tacheASupprimer){
    let indice = taches.indexOf(tacheASupprimer);
    taches.splice(indice,1);
    setTaches([...taches]);
    saveToLocalStorage(props.storageKey, taches);
  }

  const restantes = taches.filter(t => t.faite === false).length;

  return (
      <div>
          

          <p className="text-white mt-2">{restantes}/{taches.length} tâches restantes</p>
                      
          <TodoForm nouvelleTache={ajouterTache} />
          <TodoList taches={taches} onCheck={onCheck} onDelete={onDelete}/>
      </div>
  )
}

export default App;
