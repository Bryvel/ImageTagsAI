import './App.css';
import ComponentForm from './ComponentForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
      <Container  >
      <h2>Analizador de contenido de Imagenes por IA</h2>
        <Paper elevation={8} sx={{ padding: 4 }}>
          <ComponentForm />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
