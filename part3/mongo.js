require('dotenv').config()

const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

console.log('Connecting to MongoDB...')

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!')
    
    const noteSchema = new mongoose.Schema({
      content: String,
      important: Boolean,
    })
    
    const Note = mongoose.model('Note', noteSchema)
    
    return Note.find({})
  })
  .then(result => {
    console.log('📝 Found', result.length, 'notes:')
    result.forEach(note => {
      console.log(`- ${note.content} (${note.important ? 'important' : 'not important'})`)
    })
    return mongoose.connection.close()
  })
  .then(() => {
    console.log('✅ Connection closed')
    console.log('🎉 MongoDB connection test completed successfully!')
  })
  .catch(error => {
    console.error('❌ MongoDB connection error:', error.message)
    console.error('Full error:', error)
    process.exit(1)
  })