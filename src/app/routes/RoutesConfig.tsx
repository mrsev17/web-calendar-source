import { Routes, Route } from 'react-router-dom'
import { WeekView, DaysViewPage, RegisterPage, LoginPage } from '../../pages'
import { Layout } from '../../components'

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/"
        element={<Layout />}>
        <Route
          index
          path="/"
          element={<WeekView />}
        />
        <Route
          path="/day"
          element={<DaysViewPage />}
        />
      </Route>
    </Routes>
  )
}
