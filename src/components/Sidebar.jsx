import React, {useState} from 'react';
import MenuItem from "./MenuItem.jsx";
import MenuItemWithSubmenu from "./MenuItemWithSubmenu.jsx";
import SubMenuItem from "./SubMenuItem.jsx";
import Logo from "../assets/Logo.svg";
import {LayoutDashboard, IdCardLanyard, Box, Workflow, Users, AppWindow, FileCheck, Pin, ScrollText, LogOut, User} from "lucide-react";

const Sidebar = () => {
    const [expandedMenu, setExpandedMenu] = useState('Employee');

    return (
        <div className="w-56 bg-white border-r border-gray-200 h-screen flex flex-col">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    {/*<div className="w-8 h-8 bg-black"></div>*/}
                    {/*<span className="font-bold text-xl">Nebs-IT</span>*/}
                    <img src={Logo} alt="Nebs-IT" className="select-none"/>
                </div>
            </div>

            <nav className="flex-1 py-4">
                <MenuItem icon={<LayoutDashboard/>} text="Dashboard" />
                <MenuItemWithSubmenu
                    icon={<IdCardLanyard/>}
                    text="Employee"
                    isExpanded={expandedMenu === 'Employee'}
                    onToggle={() => setExpandedMenu(expandedMenu === 'Employee' ? null : 'Employee')}
                >
                    <SubMenuItem text="Employee Database" />
                    <SubMenuItem text="Add New Employee" />
                    <SubMenuItem text="Performance Report" />
                    <SubMenuItem text="Performance History" />
                </MenuItemWithSubmenu>
                <MenuItem icon={<Box/>} text="Payroll" />
                <MenuItem icon={<Workflow />} text="Pay Slip" />
                <MenuItem icon={<Users />} text="Attendance" />
                <MenuItem icon={<AppWindow/>} text="Request Center" />
                <MenuItemWithSubmenu
                    icon={<Users/>}
                    text="Career Database"
                    isExpanded={expandedMenu === 'Career'}
                    onToggle={() => setExpandedMenu(expandedMenu === 'Career' ? null : 'Career')}
                />
                <MenuItem icon={<FileCheck/>} text="Document manager" />
                <MenuItem icon={<Pin/>} text="Notice Board" active />
                <MenuItem icon={<ScrollText/>} text="Activity Log" />
                <MenuItem icon={<LogOut/>} text="Exit Interview" />
                <MenuItem icon={<User/>} text="Profile" />
            </nav>
        </div>
    );
}
export default Sidebar
