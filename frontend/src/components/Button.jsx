function Button(props){
    return(
        <div>
             <button className=" font-bold font-poppins bg-darkred text-white w-full text-center p-1 rounded ">{props.message} </button>
        </div>
    );


}
export default Button;