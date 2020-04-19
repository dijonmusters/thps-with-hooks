import React from 'react'
import HookSkaters from './HookSkaters'

import './App.scss'

const App = () => (
  <div className="app">
    <HookSkaters useCache={false} />
    <HookSkaters useCache={true} />
  </div>
)

export default App
