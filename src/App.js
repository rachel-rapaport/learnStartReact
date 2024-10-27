import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Paragraph from './components/Paragraph';
import Prop from './components/Prop';


function App() {
  function text(){
    return "header"
  }
  return (
    <div className="App">
      {/* <Header text={text}></Header>
      <Paragraph></Paragraph>
      <Form></Form>
      <Button></Button>
      <Prop text="props"></Prop> */}
      <ItemList/>
    </div>
  );
}

export default App;
