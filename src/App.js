import './App.css';
import Header from './shared/layout/Header';
import Footer from './shared/layout/Footer';
import Content from './shared/layout/Content';
import Timer from './pomodoro/Timer';
import Estafa from './Estafa/Estafa';
import Chart from "./Chart/Charthome";

function App() {
  return (
    <div className="App">
      
      <Header title="Mi App" url="https://github.com/"/>
      
      <Content>
         <Timer />
         <Estafa />
         <Chart />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
