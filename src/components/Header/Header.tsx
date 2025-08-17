"use client";
import React, { useEffect } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  useEffect(() => {});

  return (
    <header>
      <div className={style.holderHeaders}>
        <div className={style.holderHeaderMobile}></div>
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
                  <Link href="/">Servicios</Link>
                  <div className={style.contentMenu}>
                    <div className={style.option}>
                      <Link href="/">
                        Levantamiento de Observaciones de Defensa Civil
                      </Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/">Mantenimiento de Subestaciones</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/">Mantenimiento Preventivo/Correctivo</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/">Aire Acondicionado y Climatización</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/">Detección de Fugas a Tierra</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/">Sistema de Puesta a Tierra</Link>
                    </div>
                    <div className={style.option}>
                      <Link href="/">Iluminación en General</Link>
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
