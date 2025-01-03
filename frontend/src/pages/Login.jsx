import  SideBar from '../components/SideBar'
import LoginForm  from '../components/LoginForm'
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex h-screen">
            <SideBar />

            <div className="flex flex-col items-center justify-center w-2/3 px-6">
                <div className="text-center mb-10">
                    <h1 className="font-poppins font-bold text-7xl mb-3">Welcome to RadiX!</h1>
                    <p className="font-poppins text-3xl">Login below!</p>
                </div>

                <div className="w-full max-w-md">
                    <LoginForm className="mb-5" />
                </div>

                <div className="flex items-center w-full max-w-md my-8">
                    <hr className="flex-grow border-t border-gray-300" />
                    <p className="mx-4 text-xl">OR</p>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
                <div className = "w-full  max-w-md">
                    <Link to="/signup"><Button message="Sign Up" /></Link>
                </div>
                
            </div>
        </div>
    );
}

export default Login;
// function Login(){
//     return(
//         <div>
//             <div className = "flex">
//                 <SideBar className = ""></SideBar> 
//                 <div className = "content-center ml-40 pl-6 pt-10">
//                     <div className = "flex flex-col">
//                         <h1 className = "font-poppins font-bold mb-3 text-7xl"> Welcome to RadiX! </h1>
//                         <p className = "font-poppins text-3xl mb-10">Login in below!</p>
//                     </div>
//                     <LoginForm className = "mb-3"></LoginForm>
                   
//                     <div className = " w-full text-center flex mt-8 mb-8">
//                         <hr className = "mt-4 border-1 w-1/2"></hr> <p className = "ml-3 mr-3 text-xl">OR</p>  <hr className = " mt-4 border-1 w-1/2"></hr>
//                     </div>
//                     <Link to ="/signup"><Button message="Sign Up"></Button></Link>

                    
//                 </div>
                
//             </div> 
//         </div>
        
//     );
// }
// export default Login;