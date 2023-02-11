import './Modal.css'

const Modal = (props) => {

    const setModalClassName = () => {
        if(props.showModal){
            return 'modal'
        }
        return 'hidden'
    }

    return(
        <div id = 'form-modal' className = {setModalClassName()}>
            <div id = 'form-modal-background'/>
            <div id = 'form-modal-body'>
                <p id = 'form-modal-title'>Missing the following in the form:</p>
                    { props.hasName ? '' : <p className = 'form-modal-text bold'>•Name</p> }
                    { props.hasEmail ? '' : <p className = 'form-modal-text bold'>•Email</p> }
                    { props.hasPhone ? '' : <p className = 'form-modal-text bold'>•Phone Number</p> }
                    <p className = 'form-modal-text'>Please try again.</p>
                <button id = 'form-modal-close-button' onClick={() => props.toggleModal(false)}>CLOSE</button>
            </div>
        </div>
    )
}

export default Modal;