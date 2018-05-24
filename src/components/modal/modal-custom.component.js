import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '15%',
        left: '15%',
        right: 'auto',
        bottom: 'auto',
        width: '70%'
    }
};

Modal.setAppElement('#root');

class ModalCustom extends Component {

    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel={this.props.label}>

                {this.props.component}
            </Modal>
        );
    }
}

export default ModalCustom;