import { Outlet } from "react-router-dom"
import '../css/Pages.css';

const Pages = () => {

    return (
        <div className="pages-root">
            <Outlet />
        </div>
    )
}
export default Pages;