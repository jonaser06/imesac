"use client";
import React, { useState } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <header>
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
                <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
                  Nosotros
                </Link>
                <button
                  className={style.toggleBtn}
                  onClick={() => toggleSubmenu("nosotros")}
                >
                  {activeSubmenu === "nosotros" ? "−" : "+"}
                </button>
                <ul
                  className={`${style.mobileSubmenu} ${
                    activeSubmenu === "nosotros" ? style.open : ""
                  }`}
                >
                  <li>
                    <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
                      ¿Quienes somos?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nosotros/mision"
                      onClick={() => setMenuOpen(false)}
                    >
                      Misión
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nosotros/vision"
                      onClick={() => setMenuOpen(false)}
                    >
                      Visión
                    </Link>
                  </li>
                </ul>
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
                    <Link
                      href="/servicios/instalaciones-electricas"
                      onClick={() => setMenuOpen(false)}
                    >
                      Instalaciones Eléctricas
                    </Link>
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
                    <Link
                      href="/servicios/sistema-contra-incendios"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sistema Contra Incendios DACI / ACI
                    </Link>
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
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
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
                  <Link href="/nosotros">Nosotros</Link>
                  <div className={style.contentMenu}>
                    <div className={style.option}>
                      <Link href="/nosotros">¿Quienes somos?</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/nosotros/mision">Misión</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/nosotros/vision">Visión</Link>
                    </div>
                  </div>
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
                        <Link href="/servicios/instalaciones-electricas">
                          Instalaciones Eléctricas
                        </Link>
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
                    <div className={style.option}>
                      <Link href="/servicios/sistema-contra-incendios">
                        Sistema Contra Incendios DACI / ACI
                      </Link>
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
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Contacto</Link>
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
