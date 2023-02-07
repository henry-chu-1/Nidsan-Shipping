import './Modal.css'

const Modal = (props) => {

    const setModalClassName = () => {
        if(props.showModal){
            return 'modal'
        }
        return 'hidden'
    }

    return(
        <div id = 'modal' className = {setModalClassName()}>
            <div id = 'modalBackground'>

            </div>
            <div id = 'innerModal'>
                <button id = 'formModalCloseButton' onClick={() => props.toggleModal(false)}>CLOSE</button>
            </div>
        </div>
    )
}

export default Modal;