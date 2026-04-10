import { useState } from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      filter shown with: <input value={filter} onChange={setFilter}/>
    </div>
  )
}

const PersonForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

const Numbers = ({ personsToShow }) => {
  return (
    personsToShow.map(person => (
      <p key={person.name}>{person.name} {person.number}</p>
    ))
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')



  const Button = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const AddNewName = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }

  const AddNewNumber = (event) => {
    setNewNumber(event.target.value)
    console.log(newNumber)
  }

  const [filter, setFilter] = useState('')
  const SetFilter = (event) => {
    setFilter(event.target.value)
    console.log(filter)
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter filter={filter} setFilter={SetFilter}/>

      <h3>add a new</h3>

      <PersonForm addPerson={Button} newName={newName} newNumber={newNumber} handleNameChange={AddNewName} handleNumberChange={AddNewNumber}/>

      <h3>Numbers</h3>

      <Numbers personsToShow={personsToShow}/>
    </div>
  )
}

export default App