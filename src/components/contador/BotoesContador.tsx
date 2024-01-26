interface ButtonCounterProps{
    onClick: () => void;
    label: string
}
export const ButtonCounter: React.FC<ButtonCounterProps> = ({onClick, label}) =>{
    return(
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}