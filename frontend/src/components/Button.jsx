function Button(props){
    return(
        <div>
             <button className="bg-darkred text-white w-full text-center p-1 rounded ">{props.message} </button>
        </div>
    );


}
export default Button;