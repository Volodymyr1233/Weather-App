import React from "react";
import cl from "./AddFormButton.module.css"

interface AddFormButtonProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}
const AddFormButton = ({setVisible}: AddFormButtonProps) => {
    return (
        <button className={cl.addForm} onClick={() => setVisible(true)}>Add City Form</button>
    )
}

export default AddFormButton;