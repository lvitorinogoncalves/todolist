import React, { useEffect, useRef } from "react";
import ButtonAdd from "../button/buttonAdd";

type InputButtonAddProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  placeholder: string;
};

function InputButtonAdd({ value, onChange, onAdd, placeholder }: InputButtonAddProps) {
  const inputRef = useRef<HTMLInputElement | null>(null); 

  useEffect(() => {
    setFocusInputText();
  }, []);

  const handleAddClick = () => {
    onAdd();

    setFocusInputText();
  };

  const setFocusInputText = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        maxLength={50}
      />
      <ButtonAdd onClick={handleAddClick}></ButtonAdd>
    </>
  );
}

export default InputButtonAdd;
