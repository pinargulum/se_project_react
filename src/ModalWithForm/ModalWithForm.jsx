import "../ModalWithForm/ModalWithForm.css";
function ModalWithForm() {
    return(
        <div className="modal">
            <div className="modal__content">
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
                <label htmlFor="imageURL" className="modal__label">imageURL
                <input
                type="text"
                className="modal__input"
                id="imageURL"
                placeholder="ImageURL"
                />
                </label>
               <fillset className="modal__radio-buttons">
                <legend className="modal__legend">
                    Select the weather type:
                </legend>
                <label htmlFor="hot" className="modal__label" modal__label-type-radio>Hot
                    <input
                    id="hot"
                    type="radio"
                    className="modal__radio-input"
                    />
                </label>
                <label htmlFor="warm" className="modal__label" modal__label-type-radio>Warm
                    <input
                    id="warm"
                    type="radio"
                    className="modal__radio-input"
                    />
                </label>
                <label htmlFor="cold" className="modal__label" modal__label-type-radio>Cold
                    <input
                    id="cold"
                    type="radio"
                    className="modal__radio-input"
                    />
                </label>
                </fillset>
                <button className="modal__submit" type="submit">Add garment</button>


            </form>
        </div>
        </div>
    )
   
}
export default ModalWithForm