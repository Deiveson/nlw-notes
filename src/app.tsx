import logo from './assets/logo-nlw.svg'
import { NoteCard } from './compontens/note-card.tsx'
import { NewNoteCard } from './compontens/new-note-card.tsx'
import { ChangeEvent, useCallback, useState } from 'react'

interface INote {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState('')

  const [notes, setNotes] = useState<Array<INote>>(() => {
    const localStorageNotes = localStorage.getItem('notes')
    if (localStorageNotes) return JSON.parse(localStorageNotes)
    return []
  })
  const onNoteCreated = useCallback((content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    setNotes((allNotes) => {
      localStorage.setItem('notes', JSON.stringify([...allNotes, newNote]))
      return [...allNotes, newNote]
    })
  }, [])

  const onNoteDeleted = useCallback((id: string) => {
    setNotes((allNotes) => {
      const noDeletedNotes = allNotes.filter((note) => note.id !== id)
      localStorage.setItem('notes', JSON.stringify(noDeletedNotes))
      return noDeletedNotes
    })
  }, [])

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    setSearch(query)
  }

  const filteredNotes = search
    ? notes.filter((note) =>
        note.content.toLowerCase().includes(search.toLowerCase()),
      )
    : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="logo-nlw" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          onChange={handleSearch}
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 cursor-text"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => (
          <NoteCard note={note} key={note.id} onNoteDeleted={onNoteDeleted} />
        ))}
      </div>
    </div>
  )
}
