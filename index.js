import React from "react"
import ReactDOM from "react-dom"
import Profile from "./components/Profile"
import Socials from "./components/Socials"
import Picture from "./components/Picture"

function App() {
    return (
        <main>
            <div className="business-card">
                <Picture />
                <Profile />
                <Socials />
            </div>
        </main>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))