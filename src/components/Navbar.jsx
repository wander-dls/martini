import { navLinks } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: 'nav',
            start: 'bottom top'
        }
    })

    navTween.fromTo('nav', { backgroundColor: 'trasparent'}, {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut'
    })
}, [])

  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2 xl:p-6">
                <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
                <p>Martini Lounge</p>
            </a>
            <ul className="xl:pr-6">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} className="">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
export default Navbar