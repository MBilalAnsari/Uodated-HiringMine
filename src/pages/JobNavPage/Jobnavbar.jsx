import { Link, replace } from "react-router-dom";
import logo from "../../../public/logo.png"
import ContrastIcon from '@mui/icons-material/Contrast';
import "./Jobnavbar.css"
import { useEffect, useState } from "react";
import FindInPageIcon from '@mui/icons-material/FindInPage';
function JobNavbar() {
    const [filter, setFilter] = useState([])
    useEffect(() => {
        filterAPI()    
    }, [] )
    const filterAPI = () => {
        return (
            fetch(`https://backend-prod.app.hiringmine.com/api/filterations/all`)
                .then((resp) => (resp.json()))
                .then((resp) => {
                    setFilter(resp.data)
                    console.log(resp.data , "==>resp.data")
                    console.log(filter , "==> filter resp") 
                    console.log(filter , "==> filter resp") 
                })               
            )
        }
   

    return (
        <div>
            <div className="nav-bg flex justify-around  p-6 my-0 mx-10 ">
                <img src={logo} alt="" className="w-48 " />

                <input className="border" type="text" name="" id="" />

                <div>
                    <ContrastIcon className="" />
                </div>
            </div>
            <div className="filteration-Parent">
            
             {
                filter?.filteration?.map((categ , index)=> (<Button categ={categ} key={index}/>))
             }
            <button>
                {
                    <FindInPageIcon/>
                }
            </button>
            </div>
        </div>
    )
}
export default JobNavbar


const Button = ({categ}) => {
    return (
        <div className="filteration-select">
            <select id="opt">
                <option value={categ.filterationName}>{categ.filterationName}</option>
                {categ?.filterationOptions?.map((option, index) => (
                    <option className="map-select" key={index} value={option.value}>
                        {option.title}
                    </option>
                ))}
                
            </select>
            
        </div>
    )
}