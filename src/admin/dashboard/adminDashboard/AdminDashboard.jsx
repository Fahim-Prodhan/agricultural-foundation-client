
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
            <div className='md:ml-72 lg:ml-[20%] lg:mr-[3%] px-6'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;