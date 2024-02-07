export function NoteCard(){
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative text-left outline-none hover:ring-2 ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">Há dois dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur delectus excepturi obcaecati
        possimus quisquam reprehenderit ullam. Aliquam dolores, esse magni odit officiis quam ullam voluptatum. Dolor
        excepturi officia omnis!
      </p>
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}