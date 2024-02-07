import logo from './assets/logo-nlw.svg'
import { NoteCard } from './compontens/note-card.tsx';
import { NewNoteCard } from './compontens/new-note-card.tsx';

export function App() {
  return (
      <div className="mx-5 max-w-6xl my-12 space-y-6">
        <img src={logo} alt='logo-nlw'/>
        <form className="w-full">
          <input
            type="text"
            placeholder="Busque em suas notas..."
            className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 "/>
        </form>

        <div className="h-px bg-slate-700"></div>

        <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
          <NewNoteCard />
          <NoteCard
            note={{
              content:'Hello World',
              date: new Date()
              }}
          />
        </div>
      </div>
  )
}