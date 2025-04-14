import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePageTag } from './app.style'
import Layout from './layout'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={(
            <HomePageTag>Home Page</HomePageTag>
          )} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
