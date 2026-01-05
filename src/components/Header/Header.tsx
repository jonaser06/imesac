"use client";
import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [desktopMenuBlocked, setDesktopMenuBlocked] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setOpenSubmenus({});
    }
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setOpenSubmenus({});
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${style.headerWrapper} ${isSticky ? style.sticky : ""}`}
    >
      <div className={style.holderHeaders}>
        <div className={style.holderHeaderMobile}>
          <div className={style.mobileHeader}>
            <Link href="/" className={style.mobileLogo}>
              <Image src="/logo.png" alt="Logo" width={120} height={64} />
            </Link>
            <button
              className={style.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className={`${style.mobileNav} ${menuOpen ? style.open : ""}`}>
            <ul>
              <li>
                <Link href="/" onClick={closeAllMenus}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/empresa" onClick={closeAllMenus}>
                  Empresa
                </Link>
              </li>
              <li className={style.hasDropdown}>
                <button
                  className={style.menuButton}
                  onClick={() => toggleSubmenu("servicios")}
                >
                  <span>Servicios</span>
                  <span
                    className={`${style.menuIcon} ${
                      openSubmenus.servicios ? style.rotate : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <ul
                  className={`${style.dropdownMenu} ${
                    openSubmenus.servicios ? style.show : ""
                  }`}
                >
                  <li>
                    <Link
                      href="/servicios/licencias-municipales"
                      onClick={closeAllMenus}
                    >
                      Licencias Municipales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/mantenimiento-subestaciones-electricas"
                      onClick={closeAllMenus}
                    >
                      Mantenimiento de Subestaciones Eléctricas
                    </Link>
                  </li>

                  <li className={style.hasDropdown}>
                    <button
                      className={style.submenuButton}
                      onClick={() => toggleSubmenu("instalaciones")}
                    >
                      <span>Instalaciones Eléctricas</span>
                      <span
                        className={`${style.menuIcon} ${
                          openSubmenus.instalaciones ? style.rotate : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <ul
                      className={`${style.dropdownMenu} ${
                        openSubmenus.instalaciones ? style.show : ""
                      }`}
                    >
                      <li>
                        <Link
                          href="/servicios/instalaciones-electricas/tableros-electricos"
                          onClick={closeAllMenus}
                        >
                          Tableros Eléctricos
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/instalaciones-electricas/iluminacion-industrial-comercial"
                          onClick={closeAllMenus}
                        >
                          Iluminación Industrial y Comercial
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/instalaciones-electricas/sistema-puesta-tierra"
                          onClick={closeAllMenus}
                        >
                          Sistema de Puesta a Tierra
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className={style.hasDropdown}>
                    <button
                      className={style.submenuButton}
                      onClick={() => toggleSubmenu("incendios")}
                    >
                      <span>Sistema Contra Incendios</span>
                      <span
                        className={`${style.menuIcon} ${
                          openSubmenus.incendios ? style.rotate : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <ul
                      className={`${style.dropdownMenu} ${
                        openSubmenus.incendios ? style.show : ""
                      }`}
                    >
                      <li>
                        <Link
                          href="/servicios/sistema-contra-incendios"
                          onClick={closeAllMenus}
                        >
                          Sistema de Detección y Alarma (DACI)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/mantenimiento-agua-contra-incendios"
                          onClick={closeAllMenus}
                        >
                          Mantenimiento de Sistema de Agua (ACI)
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      href="/servicios/aire-acondicionado-climatizacion"
                      onClick={closeAllMenus}
                    >
                      Aire Acondicionado y Climatización
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/mantenimiento-rebobinado-motores"
                      onClick={closeAllMenus}
                    >
                      Mantenimiento y Rebobinado de Motores Eléctricos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/estructuras-metalicas"
                      onClick={closeAllMenus}
                    >
                      Estructuras Metálicas
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/tienda" onClick={closeAllMenus}>
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeAllMenus}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" onClick={closeAllMenus}>
                  Contacto
                </Link>
              </li>
            </ul>
            <a
              href="/brochure.pdf"
              download
              className={style.brochureBtnMobile}
              onClick={closeAllMenus}
            >
              <Download />
              Descargar Brochure
            </a>
          </nav>
        </div>
        <div className={style.holderHeaderDesktop}>
          <div className={style.holderHeaderCompany}>
            <Link href="/">Instalaciones Mecanicas Electricas Sur S.A.C</Link>
          </div>
          <div className={style.holderHeaderBrand}>
            <div className={style.brandLogo}>
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={185} height={100} />
              </Link>
            </div>
          </div>
          <div className={style.holderHeaderMenu}>
            <nav>
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/empresa">Empresa</Link>
                </li>
                <li>
                  <Link href="/servicios">Servicios</Link>
                  <div
                    className={`${style.contentMenu} ${
                      desktopMenuBlocked ? style.blocked : ""
                    }`}
                  >
                    <div className={style.option}>
                      <Link
                        href="/servicios/licencias-municipales"
                        onClick={closeAllMenus}
                      >
                        Licencias Municipales
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link
                        href="/servicios/mantenimiento-subestaciones-electricas"
                        onClick={closeAllMenus}
                      >
                        Mantenimiento de Subestaciones Eléctricas
                      </Link>
                    </div>
                    <div className={`${style.option} ${style.hasSubmenu}`}>
                      <span>
                        <a style={{ cursor: "default" }}>
                          Instalaciones Eléctricas
                        </a>
                        <span className={style.arrowIcon}>›</span>
                      </span>
                      <div className={style.submenu}>
                        <div className={style.option}>
                          <Link
                            href="/servicios/instalaciones-electricas/tableros-electricos"
                            onClick={closeAllMenus}
                          >
                            Tableros Eléctricos
                          </Link>
                        </div>
                        <div className={style.option}>
                          <Link
                            href="/servicios/instalaciones-electricas/iluminacion-industrial-comercial"
                            onClick={closeAllMenus}
                          >
                            Iluminación Industrial y Comercial
                          </Link>
                        </div>
                        <div className={style.option}>
                          <Link
                            href="/servicios/instalaciones-electricas/sistema-puesta-tierra"
                            onClick={closeAllMenus}
                          >
                            Sistema de Puesta a Tierra
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={`${style.option} ${style.hasSubmenu}`}>
                      <span>
                        <a style={{ cursor: "default" }}>
                          Sistema Contra Incendios
                        </a>
                        <span className={style.arrowIcon}>›</span>
                      </span>
                      <div className={style.submenu}>
                        <div className={style.option}>
                          <Link
                            href="/servicios/sistema-contra-incendios"
                            onClick={closeAllMenus}
                          >
                            Sistema de Detección y Alarma (DACI)
                          </Link>
                        </div>
                        <div className={style.option}>
                          <Link
                            href="/servicios/mantenimiento-agua-contra-incendios"
                            onClick={closeAllMenus}
                          >
                            Mantenimiento de Sistema de Agua (ACI)
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={style.option}>
                      <Link
                        href="/servicios/aire-acondicionado-climatizacion"
                        onClick={closeAllMenus}
                      >
                        Aire Acondicionado y Climatización
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link
                        href="/servicios/mantenimiento-rebobinado-motores"
                        onClick={closeAllMenus}
                      >
                        Mantenimiento y Rebobinado de Motores Eléctricos
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link
                        href="/servicios/estructuras-metalicas"
                        onClick={closeAllMenus}
                      >
                        Estructuras Metálicas
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="/tienda">Tienda</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
                <li>
                  <a
                    href="/brochure.pdf"
                    download
                    className={style.brochureBtn}
                  >
                    <Download />
                    Brochure
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
