import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
    const [initialData, setInitialData] = useState([{}]);

    useEffect(() => {
      fetch("/api").then(
        response => response.json()
      ).then(data => setInitialData(data))
    }, [])
    return (
        <div className="App">
            <h1>{initialData.hi}</h1>
        </div>
    )
}
