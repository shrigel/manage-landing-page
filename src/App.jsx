import Container from './components/ui/Container'
import Button from './components/ui/Button'
import Logo from './components/ui/Logo'

function App() {
  return (
    <main>
      <Container>
        <Logo />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Get Started</Button>
          <Button variant="inverted">Get Started</Button>
        </div>
      </Container>
    </main>
  )
}

export default App
