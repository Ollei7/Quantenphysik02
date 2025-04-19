import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Atom } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 text-primary hover:text-primary">
            <img 
              src="https://www.qvls.de/wp-content/uploads/sites/7/2022/06/RZ_Logo_QVLS_web-max_100px.png" 
              alt="QVLS Logo" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg md:text-xl">Quantenphysik im Unterricht</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "font-semibold text-accent" : "text-primary hover:text-accent"
              }
            >
              Start
            </NavLink>
            <NavLink 
              to="/einfuehrung" 
              className={({ isActive }) => 
                isActive ? "font-semibold text-accent" : "text-primary hover:text-accent"
              }
            >
              Einführung
            </NavLink>
            <div className="relative group">
              <button className="text-primary hover:text-accent flex items-center gap-1">
                Module
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {[1, 2, 3, 4].map((moduleId) => (
                  <NavLink
                    key={moduleId}
                    to={`/module/${moduleId}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-light ${isActive ? "text-accent font-semibold" : "text-primary"}`
                    }
                  >
                    Modul {moduleId}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink 
              to="/kontakt" 
              className={({ isActive }) => 
                isActive ? "font-semibold text-accent" : "text-primary hover:text-accent"
              }
            >
              Kontakt
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <div className="container py-4 flex flex-col gap-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `py-2 ${isActive ? "font-semibold text-accent" : "text-primary"}`
                }
              >
                Start
              </NavLink>
              <NavLink 
                to="/einfuehrung" 
                className={({ isActive }) => 
                  `py-2 ${isActive ? "font-semibold text-accent" : "text-primary"}`
                }
              >
                Einführung
              </NavLink>
              <div className="py-2">
                <p className="font-semibold mb-2">Module</p>
                <div className="pl-4 flex flex-col gap-2">
                  {[1, 2, 3, 4].map((moduleId) => (
                    <NavLink
                      key={moduleId}
                      to={`/module/${moduleId}`}
                      className={({ isActive }) =>
                        isActive ? "font-semibold text-accent" : "text-primary"
                      }
                    >
                      Modul {moduleId}
                    </NavLink>
                  ))}
                </div>
              </div>
              <NavLink 
                to="/kontakt" 
                className={({ isActive }) => 
                  `py-2 ${isActive ? "font-semibold text-accent" : "text-primary"}`
                }
              >
                Kontakt
              </NavLink>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://www.qvls.de/wp-content/uploads/sites/7/2022/06/RZ_Logo_QVLS_web-max_100px.png" 
                  alt="QVLS Logo" 
                  className="h-8 w-auto brightness-200"
                />
                <h3 className="text-xl font-bold">Quantenphysik im Unterricht</h3>
              </div>
              <p className="text-gray-300">
                Eine Fortbildungsreihe für Lehrkräfte zur Integration moderner Quantenphysik in den Schulunterricht.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><NavLink to="/" className="text-gray-300 hover:text-accent">Start</NavLink></li>
                <li><NavLink to="/einfuehrung" className="text-gray-300 hover:text-accent">Einführung</NavLink></li>
                <li><NavLink to="/kontakt" className="text-gray-300 hover:text-accent">Kontakt</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Module</h4>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((moduleId) => (
                  <li key={moduleId}>
                    <NavLink to={`/module/${moduleId}`} className="text-gray-300 hover:text-accent">
                      Modul {moduleId}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Quantenphysik im Unterricht. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
