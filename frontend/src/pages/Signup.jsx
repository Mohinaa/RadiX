import  SideBar from '../components/SideBar'
import SignUpForm  from '../components/SignUpForm'
import Button from '../components/Button'
import { Link } from 'react-router-dom';

function Signup(){
    return (
        <div className="flex h-screen">
            <SideBar />

            <div className="flex flex-col items-center justify-center w-2/3 px-6">
                <div className="text-center mb-10">
                    <h1 className="font-poppins font-bold text-7xl mb-3">Welcome to RadiX!</h1>
                    <p className="font-poppins text-3xl">Sign Up!</p>
                </div>

                <div className="w-full max-w-md">
                    <SignUpForm className="mb-5" />
                </div>

                <div className="flex items-center w-full max-w-md my-8">
                    <hr className="flex-grow border-t border-gray-300" />
                    <p className="mx-4 text-xl">OR</p>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
                <div className = "w-full  max-w-md">
                    <Link to  = "/login" ><Button message="Login In"></Button></Link>
                </div>
                
            </div>
        </div>
    );
   
}
export default Signup;