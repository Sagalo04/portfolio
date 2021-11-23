import './App.css';
import ImageFolio from './components/ImageFolio/ImageFolio';
import Skills from './components/Seccion/Skills/Skills';
import Welcome from './components/Seccion/Welcome/Welcome';
import {collection} from './constants/imagenes'

function App() {
  const imglist2 = collection.map((i) => 
    <ImageFolio image={i}/>
  )
  const imglist = collection.map((element) => 
      <ImageFolio image={element} />
  )
  return (
    <div className="App">
      <div className="listfolio">
        {imglist2}
      </div> 
      <Welcome />
      <Skills />
    </div>
  );
}

export default App;
