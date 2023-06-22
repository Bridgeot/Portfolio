'use client'

import { createContext, useState } from 'react'

export const Context = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState('')

    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? '' : 'dark'))
    }

    return (
        <Context.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>{children}</div>
        </Context.Provider>
    )
}
