import React from 'react'

import Header from '../components/Header'
import Home from '../components/Home'
import Intro from '../components/Intro'
import Layout from '../components/Layout'

const Index = () => (
  <html lang="en">
  <Layout>
    <div>
      <Header />
      <Intro />
      <Home />
    </div>
  </Layout>
  </html>
)

export default Index
