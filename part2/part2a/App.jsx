import Note from './components/Note'


const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
            <li key={note.id}>
                <Note note={note} />
            </li>
        )}
      </ul>
    </div>
  )
}

export default App