import React from "react"
import RoutesApp from "./routes"
import { AuthProvider } from "./contexts/Auth"


function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}

export default App
