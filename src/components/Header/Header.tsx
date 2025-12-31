"use client";
import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
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
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/empresa" onClick={() => setMenuOpen(false)}>
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/servicios" onClick={() => setMenuOpen(false)}>
                  Servicios
                </Link>
                <button
                  className={style.toggleBtn}
                  onClick={() => toggleSubmenu("servicios")}
                >
                  {activeSubmenu === "servicios" ? "−" : "+"}
                </button>
                <ul
                  className={`${style.mobileSubmenu} ${
                    activeSubmenu === "servicios" ? style.open : ""
                  }`}
                >
                  <li>
                    <Link
                      href="/servicios/licencias-municipales"
                      onClick={() => setMenuOpen(false)}
                    >
                      Licencias Municipales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/mantenimiento-subestaciones-electricas"
                      onClick={() => setMenuOpen(false)}
                    >
                      Mantenimiento de Subestaciones Eléctricas
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleSubmenu("instalaciones")}
                      style={{ cursor: "pointer" }}
                    >
                      Instalaciones Eléctricas
                    </a>
                    <button
                      className={style.toggleBtn}
                      onClick={() => toggleSubmenu("instalaciones")}
                    >
                      {activeSubmenu === "instalaciones" ? "−" : "+"}
                    </button>
                    <ul
                      className={`${style.mobileSubmenu} ${
                        activeSubmenu === "instalaciones" ? style.open : ""
                      }`}
                    >
                      <li>
                        <Link
                          href="/servicios/instalaciones-electricas/tableros-electricos"
                          onClick={() => setMenuOpen(false)}
                        >
                          Tableros Eléctricos
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/instalaciones-electricas/iluminacion-industrial-comercial"
                          onClick={() => setMenuOpen(false)}
                        >
                          Iluminación Industrial y Comercial
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/instalaciones-electricas/sistema-puesta-tierra"
                          onClick={() => setMenuOpen(false)}
                        >
                          Sistema de Puesta a Tierra
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleSubmenu("incendios")}
                      style={{ cursor: "pointer" }}
                    >
                      Sistema Contra Incendios
                    </a>
                    <button
                      className={style.toggleBtn}
                      onClick={() => toggleSubmenu("incendios")}
                    >
                      {activeSubmenu === "incendios" ? "−" : "+"}
                    </button>
                    <ul
                      className={`${style.mobileSubmenu} ${
                        activeSubmenu === "incendios" ? style.open : ""
                      }`}
                    >
                      <li>
                        <Link
                          href="/servicios/sistema-contra-incendios"
                          onClick={() => setMenuOpen(false)}
                        >
                          Sistema de Detección y Alarma (DACI)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/mantenimiento-agua-contra-incendios"
                          onClick={() => setMenuOpen(false)}
                        >
                          Mantenimiento de Sistema de Agua (ACI)
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/servicios/aire-acondicionado-climatizacion"
                      onClick={() => setMenuOpen(false)}
                    >
                      Aire Acondicionado y Climatización
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/mantenimiento-rebobinado-motores"
                      onClick={() => setMenuOpen(false)}
                    >
                      Mantenimiento y Rebobinado de Motores Eléctricos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/estructuras-metalicas"
                      onClick={() => setMenuOpen(false)}
                    >
                      Estructuras Metálicas
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/tienda" onClick={() => setMenuOpen(false)}>
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" onClick={() => setMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
            <a
              href="/brochure.pdf"
              download
              className={style.brochureBtnMobile}
              onClick={() => setMenuOpen(false)}
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
                  <div className={style.contentMenu}>
                    <div className={style.option}>
                      <Link href="/servicios/licencias-municipales">
                        Licencias Municipales
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/servicios/mantenimiento-subestaciones-electricas">
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
                          <Link href="/servicios/instalaciones-electricas/tableros-electricos">
                            Tableros Eléctricos
                          </Link>
                        </div>
                        <div className={style.option}>
                          <Link href="/servicios/instalaciones-electricas/iluminacion-industrial-comercial">
                            Iluminación Industrial y Comercial
                          </Link>
                        </div>
                        <div className={style.option}>
                          <Link href="/servicios/instalaciones-electricas/sistema-puesta-tierra">
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
                          <Link href="/servicios/sistema-contra-incendios">
                            Sistema de Detección y Alarma (DACI)
                          </Link>
                        </div>
                        <div className={style.option}>
                          <Link href="/servicios/mantenimiento-agua-contra-incendios">
                            Mantenimiento de Sistema de Agua (ACI)
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={style.option}>
                      <Link href="/servicios/aire-acondicionado-climatizacion">
                        Aire Acondicionado y Climatización
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/servicios/mantenimiento-rebobinado-motores">
                        Mantenimiento y Rebobinado de Motores Eléctricos
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/servicios/estructuras-metalicas">
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
