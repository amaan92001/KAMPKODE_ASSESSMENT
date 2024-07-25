import { BG } from "./my-components/BG"
import { Navbar } from "./my-components/Navbar"
import { Footer } from "./my-components/Footer"

function App() {

  return (
    <div className="h-fit">
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="fixed top-8 w-full left-0 right-0 flex justify-between items-center mx-auto px-2 sm:hidden">
        <div className="text-xl font-bold">
          <span className="text-purple-600">N</span>AV
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <BG />
      <Footer />
    </div>
  )
}

export default App
