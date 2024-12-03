import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";


  /* la funcion createNote se puede poner dentro de map o ponerla fuera 
  y llamarla en map y funciona igualmente */

function App() {
  return (
    <>
      <Header />
      {notes.map(function createNote(simplenote) {
    return (
      <Note
        key={simplenote.key}
        title={simplenote.title}
        content={simplenote.content}
      />
    );
  })}
      <Footer />
    </>
  );
}

export default App;
