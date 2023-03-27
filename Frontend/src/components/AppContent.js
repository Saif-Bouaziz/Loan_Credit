import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import BanquierRoutes from '../../src/pages/LandingPages/Banquier/BanquierRoutes'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {BanquierRoutes.map((BanquierRoutes, idx) => {
            return (
              BanquierRoutes.element && (
                <Route
                  key={idx}
                  path={BanquierRoutes.path}
                  exact={BanquierRoutes.exact}
                  name={BanquierRoutes.name}
                  element={<BanquierRoutes.element />}
                />
              )
            )
          })}
          <Route path="/dashboard" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
