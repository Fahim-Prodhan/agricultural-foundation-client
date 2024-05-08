
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar';


const AdminDashboard = () => {


    return (
        <div>
            <div className="sticky top-0 z-[99]"><Navbar></Navbar></div>
            <div >
                <Sidebar></Sidebar>
            </div>
            <div className='ml-[20%] mr-[3%]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;