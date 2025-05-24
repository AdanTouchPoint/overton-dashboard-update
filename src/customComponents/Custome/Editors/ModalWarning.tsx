import React from 'react';
interface ModalWarningProps {
    setActiveForm: (value: string) => void;
    mode?: string;
    activeForm?: string;
}
const ModalWarning: React.FC<ModalWarningProps> = ({setActiveForm,mode}) => {
const backWithOutSave = () => {
    if (mode === "edit") {
        return setActiveForm("all");
    }
    if (mode === "create") {
        return setActiveForm("main");
    }
}

    return (
        <div className="modal">
            <div className='modal-content'>
            <h2>Warning</h2>
            <p>This is a warning modal.</p>
            <p>Are you sure you want to proceed?</p>
            <div className="modal-buttons">
                <button>Cancel</button>
                <button onClick={backWithOutSave}>Proceed</button>
            </div>
        </div>
        </div>
    );
};

export default ModalWarning;