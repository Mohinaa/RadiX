import  SideBar from '../components/SideBar'
import LoginForm  from '../components/LoginForm'
import Button from '../components/Button';
import { Link } from 'react-router-dom';
function Login(){
    return(
        <div>
            <div className = "flex">
                <SideBar className = ""></SideBar> 
                <div className = "content-center ml-40 pl-6 pt-10">
                    <div className = "flex flex-col">
                        <h1 className = "mb-3 text-7xl"> Welcome to RadiX! </h1>
                        <p className = "text-3xl mb-10">Login in below!</p>
                    </div>
                    <LoginForm className = "mb-3"></LoginForm>
                   
                    <div className = " w-full text-center flex mt-8 mb-8">
                        <hr className = "mt-4 border-1 w-1/2"></hr> <p className = "ml-3 mr-3 text-xl">OR</p>  <hr className = " mt-4 border-1 w-1/2"></hr>
                    </div>
                    <Link to ="/signup"><Button message="Sign Up"></Button></Link>

                    
                </div>
                
            </div> 
        </div>
        
    );
}
export default Login;