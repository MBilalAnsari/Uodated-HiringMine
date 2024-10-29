import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"
import ContrastIcon from '@mui/icons-material/Contrast';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="nav-bg flex justify-around  p-6 my-0 mx-10 ">
            <img src={logo} alt="" className="w-48 " />
            <div className="my-auto">
                <ul className="flex gap-5 my-auto text-base">
                    <li><Link>About</Link></li>
                    <li><a class="" href="">People</a></li>
                    <li><Link to='/jobs'>Jobs</Link></li>
                    <li><a class="" href="">Login</a></li>
                    <li><a class="" href="">Join Now</a></li>
                    <li><a class="text-indigo-600" href="">Employee / Post Job</a></li>
                </ul>
            </div>
        <div>
            <ContrastIcon className=""/>
        </div>
        </div>
    )
}
export default Navbar