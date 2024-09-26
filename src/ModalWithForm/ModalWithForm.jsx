import "../ModalWithForm/ModalWithForm.css";
function ModalWithForm() {
    return(
        <div className="modal">
            <form className="modal__form">
                <h2 className="modal__title">New garment</h2>
                <button type="button" className="modal__close-button">CLOSE</button>
                <label htmlFor="name" className="modal__label">Name
                <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
                />
                </label>
                



            </form>
        
        </div>
    )
   
}
export default ModalWithForm