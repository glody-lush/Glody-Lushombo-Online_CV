import Container from 'react-bootstrap/esm/Container';
import './App.css';
import CompleteCv from './components/CompleteCv';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossOrigin="anonymous"
/>    
     {/* CompleteCv compenen */}
      <CompleteCv />

     { /* set Footer Component to be inside a container*/}
      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
