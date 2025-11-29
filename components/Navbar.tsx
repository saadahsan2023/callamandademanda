export default function Navbar() {
  const links = ["About Us", "Practice Areas", "Reviews", "Results", "Locations", "Resources", "Contact Us"]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex flex-wrap justify-center gap-10 py-5 text-lg font-semibold">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-navy hover:text-pink transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}