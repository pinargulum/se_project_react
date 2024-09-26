import Header from "./Header.jsx";
import './App.css'
import Main from "./Main/Main.jsx";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";

function App() {

  return (
    <div className = "page">
    <div className = "page__content">
      <Header />
      <Main />
      <ModalWithForm />
        
      </div>
      </div>
  )
}

export default App
