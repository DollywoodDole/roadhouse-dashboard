import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ClipLab from './pages/ClipLab'
import StreamStudio from './pages/StreamStudio'
import Marketing from './pages/Marketing'
import Community from './pages/Community'
import Partnerships from './pages/Partnerships'
import { C } from './components/tokens'

export default function App() {
  const [page, setPage] = useState('cliplab')

  const pages = {
    stream:       <StreamStudio />,
    cliplab:      <ClipLab />,
    marketing:    <Marketing />,
    community:    <Community />,
    partnerships: <Partnerships />,
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: C.bg }}>
      <Sidebar active={page} setActive={setPage} />
      {pages[page]}
    </div>
  )
}
