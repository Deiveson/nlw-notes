import logo from './assets/logo-nlw.svg'

export function App() {
  return (
      <div className="mx-5 max-w-6xl my-12 ">
        <img src={logo} alt='logo-nlw'/>
        <form className="w-full ">
          <input type="text" placeholder="Busque em suas notas..." className="w-full bg-transparent text-3xl font-semibold tracking-tight"/>
        </form>
      </div>
  )
}
