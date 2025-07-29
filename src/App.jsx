import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
  <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
    <div className="h-[100vh]"></div>
  </main>
  )
}
export default App