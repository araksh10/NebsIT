import React from 'react'

const SubMenuItem = ({text}) => {
    return (
        <div className="px-4 py-2 mx-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
            {text}
        </div>
    )
}
export default SubMenuItem
