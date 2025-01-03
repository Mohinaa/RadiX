import Button from '../components/Button';
import { Link } from 'react-router-dom';
function SignUpForm(){
    return(
        <div>
            <div className="w-full">
                <form class="bg-white">
                    <div className="mb-4">
                        <label className=" font-poppins block text-gray-700 text-xl font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"></input> 
                    </div>
                    <div className="mb-4">
                        <label className=" font-poppins block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input> 
                    </div>
                    <div class="mb-6">
                        <label class=" font-poppins block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                    </div>
                    <Link to = "/"><Button message="Sign Up"></Button></Link>
                    
                </form>
            </div>
        </div>
    );

}
export default SignUpForm;