import './App.css';
import Header from './shared/layout/Header';
import Footer from './shared/layout/Footer';
import Content from './shared/layout/Content';
import Timer from './pomodoro/Timer';
import Estafa from './Estafa/Estafa';

function App() {
  return (
    <div className="App">
      
      <Header title="Mi App" url="https://github.com/"/>
      
      <Content>
         <Timer />
         <Estafa />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
