import React from 'react';
import {ChevronDown} from 'lucide-react';


const MenuItemWithSubmenu = ({ icon, text, isExpanded, onToggle, children }) => {
    return (
        <div>
            <div
                onClick={onToggle}
                className="px-4 py-2.5 mx-2 rounded flex items-center justify-between cursor-pointer text-gray-600 hover:bg-gray-50"
            >
                <div className="flex items-center gap-3">
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm">{text}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </div>
            {isExpanded && <div className="ml-4">{children}</div>}
        </div>
    )
}
export default MenuItemWithSubmenu
