import { InputProps } from "./types";

const Input = ({ placeholder, name, type, value, onChange }: InputProps) => (
    <input 
        placeholder={placeholder}
        type={type}
        name={name} 
        step="0.0001"
        value={value}
        onChange={(e) => onChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    />
);

export default Input;
