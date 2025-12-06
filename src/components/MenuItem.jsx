import React from 'react';

const MenuItem = ({icon, text, active}) => {
    return (
        <div className={`px-4 py-2.5 mx-2 rounded flex items-center gap-3 cursor-pointer ${
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
        }`}>
            <span className="text-lg">{icon}</span>
            <span className="text-sm">{text}</span>
        </div>
    )
}
export default MenuItem
