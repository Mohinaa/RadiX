import Logo from '../images/Vector@2x.png';

function SideBar() {
    return (
        <div className="flex flex-col items-center justify-center text-poppins font-bold h-screen w-1/3 bg-darkred text-white">
            <img className="h-20 w-20 mb-4" src={Logo} alt="Logo" />
            <h1 className="text-7xl">RadiX</h1>
        </div>
    );
}

export default SideBar;
// import Logo from '../images/Vector@2x.png'
// function SideBar(){
//     return(
//         <div className = " flex text-poppins text-bold h-screen  w-1/3 bg-darkred text-white pt-20 ">
//             <img className= "h-20 w-20" src={Logo}/>
//             <h1 className = "text-7xl">RadiX </h1>
//         </div>
//     );

// }
// export default SideBar;