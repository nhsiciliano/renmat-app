"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/logomatc.png" alt="Logo" className={styles.img} width={380} height={140} />
                </Link>
            </div>
            <div className={styles.links}>
                <Link className={styles.link} href="/">Inicio</Link>
                <Link className={styles.link} href="/descmat">Descripción MAT</Link>
                <Link className={styles.link} href="/registro">Registro</Link>
                <Link className={styles.link} href="/herramientas">Herramientas</Link>
                <Link className={styles.link} href="/contacto">Contacto</Link>
            </div>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Inicio</Link>
                    <Link href="/descmat">Descripción MAT</Link>
                    <Link href="/registro">Registro</Link>
                    <Link href="/herramientas">Herramientas</Link>
                    <Link href="/contacto">Contacto</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar