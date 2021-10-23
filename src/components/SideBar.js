import React from 'react'
import { BiListCheck, BiGridAlt, BiPlusCircle, BiLogOut} from "react-icons/bi";
import { Link } from 'react-router-dom';
import imgDefault from '../default.png'
import { Redirect } from 'react-router-dom';

const SideBar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const logout = () =>{
        localStorage.clear();
        if (!localStorage.getItem('token')) {
            <Redirect to='/login'/>
            
        }
    }
    return (
        <div className="sidebar h-full w-56 fixed top-0 left-0 py-1 px-3 bg-gray-900">
            <div className="logo_content">
                <div className="logo text-white flex h-12 w-full items-center">
                    <BiListCheck className="text-2xl mr-1"/>
                    <div className="logo_name text-xl font-normal">ToDo List</div>
                </div>
            </div>
            <ul className="mt-5">
                <li className="relative h-1/2 w-full my-0 mx-1 leading-10">
                    <Link to="/tasks"  className="text-white flex items-center gap-4 hover:bg-white hover:text-gray-900 transition-all ease-in rounded-lg">
                        <BiGridAlt className="h-12 min-w-12 rounded-xl leading-10"/>
                        <span className="links_name">My ToDo's</span>
                    </Link>
                </li>
                <li className="relative h-1/2 w-full my-0 mx-1 leading-10">
                    <Link to="/create-task" className=" text-white flex items-center gap-4 hover:bg-white hover:text-gray-900 transition-all ease-in rounded-lg">
                        <BiPlusCircle className="h-12 min-w-12 rounded-xl leading-10"/>
                        <span className="links_name">Create new task</span>
                    </Link>
                </li>
            </ul>
            <div className="profile_content absolute text-white bottom-0 left-0 w-full">
                <div className="profile relative py-2 px-1 h-14">
                    <div className="profile_details flex items-center">
                        <img src={imgDefault} alt="img-profile" className="h-11 w-11 object-cover rounded-lg" />
                        <div className="text-white ml-3">
                              {user.name}
                        </div>
                    </div>
                </div>
                <BiLogOut className="absolute left-3/4 bottom-3 min-w-12 leading-10 text-xl" onClick={logout}/>
            </div>
        </div>
    )
}

export default SideBar
