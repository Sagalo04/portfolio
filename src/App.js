import './App.css';
import Portfolio from './components/Seccion/Portfolio/Portfolio';
import Resume from './components/Seccion/Resume/Resume';
// import ImageFolio from './components/ImageFolio/ImageFolio';
import Skills from './components/Seccion/Skills/Skills';
import Welcome from './components/Seccion/Welcome/Welcome';
// import {collection} from './constants/imagenes'

function App() {
  // const imglist2 = collection.map((i) => 
  //   <ImageFolio image={i}/>
  // )
  // const imglist = collection.map((element) => 
  //     <ImageFolio image={element} />
  // )
  return (
    <div className="App">
      <Welcome />
      <Skills />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
