function Button(props) {
    return(
        <button type="button" className="text-white bg-[#405FF2] rounded-[10px] p-1">{props.children}</button>
    );
}

export default Button;