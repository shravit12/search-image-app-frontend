import React, { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import api from "./utils/api"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import HistoryPage from "./pages/HistoryPage"

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    try {
      const res = await api.get("/auth/current_user")
      setUser(res.data.user)
    } catch (err) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) return <p>Server starting... just a moment </p>
  // <-- IMPORTANT

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={user ? <HomePage user={user} /> : <Navigate to="/login" />} />
      <Route path="/history" element={user ? <HistoryPage /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default App
