function Title(props) {
    return(
        <h1 className="text-[25px] text-black font-sans ">
            {props.children}
        </h1>
    );
}

export default Title;