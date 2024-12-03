import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";


function createNote(simplenote) {
    return (
      <Note
        key={simplenote.id}
        title={simplenote.title}
        content={simplenote.content}
      />
    );
  }

function App() {
  return (
    <>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </>
  );
}

export default App;
