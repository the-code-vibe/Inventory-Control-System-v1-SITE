function Input(props) {
    return(
    
        <input type="text" className="flex border text-[14px] border-slate-400 rounded-md 
        mr-[15px] ml-[2px] p-[9px] py-[3px] w-96 h-8" required {...props}/>
    
    );
}

export default Input;