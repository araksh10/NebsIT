import React, {useState} from 'react';
import './App.css';
import {Bell, Calendar, Plus, Edit2, MoreVertical, Eye, ArrowLeft, ArrowRight} from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";
import Form from "./components/form/Form.jsx";

// import data from "../public/data.json";

function App() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [notices, setNotices] = useState([
        {
            id: 1,
            title: 'Office closed on Friday for maintenance.',
            noticeType: 'General / Company-Wide',
            department: 'All Department',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        },
        {
            id: 2,
            title: 'Eid al-Fitr holiday schedule.',
            noticeType: 'Holiday & Event',
            department: 'Finance',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        },
        {
            id: 3,
            title: 'Updated code of conduct policy',
            noticeType: 'HR & Policy Update',
            department: 'Sales Team',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        },
        {
            id: 4,
            title: 'Payroll for October will be processed on 28th',
            noticeType: 'Finance & Payroll',
            department: 'Web Team',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        },
        {
            id: 5,
            title: 'System update scheduled for 30 Oct (9:00-11:00 PM)',
            noticeType: 'IT / System Maintenance',
            department: 'Database Team',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        },
        {
            id: 6,
            title: 'Design team sprint review moved to Tuesday.',
            noticeType: 'Department / Team',
            department: 'Admin',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        },
        {
            id: 7,
            title: 'Unauthorized absence recorded on 18 Oct 2025',
            noticeType: 'Warning / Disciplinary',
            department: 'Individual',
            publishedOn: '15-Jun-2025',
            status: 'Unpublished',
            isPublished: false
        },
        {
            id: 8,
            title: 'Office closed today due to severe weather',
            noticeType: 'Emergency / Urgent',
            department: 'HR',
            publishedOn: '15-Jun-2025',
            status: 'Draft',
            isPublished: false
        }
    ]);

    const [selectedNotices, setSelectedNotices] = useState([]);
    const [expandedMenu, setExpandedMenu] = useState('Employee');
    const [formData, setFormData] = useState({
        targetDepartment: 'Individual',
        noticeTitle: '',
        employeeId: '',
        employeeName: '',
        position: '',
        noticeType: '',
        publishDate: '',
        noticeBody: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({...prev, [field]: value}));
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setUploadedFiles(prev => [...prev, ...files]);
    };

    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const toggleNoticeSelection = (id) => {
        setSelectedNotices(prev =>
            prev.includes(id) ? prev.filter(nId => nId !== id) : [...prev, id]
        );
    };

    const getDepartmentColor = (dept) => {
        const colors = {
            'All Department': 'text-blue-600',
            'Finance': 'text-purple-600',
            'Sales Team': 'text-orange-600',
            'Web Team': 'text-blue-500',
            'Database Team': 'text-teal-600',
            'Admin': 'text-purple-500',
            'Individual': 'text-blue-600',
            'HR': 'text-red-600'
        };
        return colors[dept] || 'text-gray-600';
    };

    const togglePublishStatus = (id) => {
        setNotices(prev =>
            prev.map(notice =>
                notice.id === id
                    ? {
                        ...notice,
                        isPublished: !notice.isPublished,
                        status: !notice.isPublished ? 'Published' : 'Unpublished'
                    }
                    : notice
            )
        );
    };

    return (
        <>
            <div className="flex h-screen bg-gray-50">
                <Sidebar/>

                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="bg-white border-b border-gray-200 px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-800">Good Afternoon Asif</h1>
                                <p className="text-sm text-gray-500">
                                    {new Date().toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Bell className="w-5 h-5 text-gray-600"/>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">Asif Riaj</span>
                                    <span className="text-xs text-gray-500">Hr</span>
                                    <div
                                        className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                                </div>
                            </div>
                        </div>
                    </header>


                    <main className="flex-1 overflow-auto px-8 py-6">
                        {showCreateForm ? (
                            <Form
                                onBack={() => setShowCreateForm(false)}
                                formData={formData}
                                onInputChange={handleInputChange}
                                uploadedFiles={uploadedFiles}
                                onFileUpload={handleFileUpload}
                                onRemoveFile={removeFile}
                            />
                        ) : (
                            <>
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Notice Management</h2>
                                        <div className="flex items-center gap-4">
                                <span className="text-sm">
                                    Active Notices: <span className="text-green-600 font-semibold">8</span>
                                </span>
                                            <span className="text-gray-300">|</span>
                                            <span className="text-sm">
                                    Draft Notice: <span className="text-orange-500 font-semibold">04</span>
                                </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setShowCreateForm(true)}
                                                className="px-5 py-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 flex items-center gap-2">
                                                <Plus className="w-4 h-4"/>
                                                Create Notice
                                            </button>
                                            <button
                                                className="px-5 py-2.5 border border-orange-500 text-orange-500 rounded-lg text-sm font-medium hover:bg-orange-50 flex items-center gap-2">
                                                <Edit2 className="w-4 h-4"/>
                                                All Draft Notice
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-600">Filter by:</span>
                                        <select
                                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                                            <option>Departments or individuals</option>
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="Employee Id or Name"
                                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-48"
                                        />
                                        <select
                                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                                            <option>Status</option>
                                        </select>
                                        <button
                                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white flex items-center gap-2">
                                            <Calendar className="w-4 h-4"/>
                                            Published on
                                        </button>
                                        <button className="text-sm text-blue-600 hover:underline">Reset Filters</button>
                                    </div>

                                </div>


                                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-4 py-3 text-left">
                                                <input type="checkbox" className="rounded"/>
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Notice
                                                Type
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Departments/Individual</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Published
                                                On
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                        {notices.map((notice) => (
                                            <tr key={notice.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedNotices.includes(notice.id)}
                                                        onChange={() => toggleNoticeSelection(notice.id)}
                                                        className="rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">{notice.title}</td>
                                                <td className="px-4 py-4 text-sm text-gray-600">{notice.noticeType}</td>
                                                <td className="px-4 py-4 text-sm">
                                            <span
                                                className={getDepartmentColor(notice.department)}>{notice.department}</span>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-600">{notice.publishedOn}</td>
                                                <td className="px-4 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          notice.status === 'Published' ? 'bg-green-100 text-green-700' :
                              notice.status === 'Draft' ? 'bg-orange-100 text-orange-700' :
                                  'bg-gray-100 text-gray-700'
                      }`}>
                        {notice.status}
                      </span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <button className="text-gray-600 hover:text-gray-800">
                                                            <Eye className="w-4 h-4"/>
                                                        </button>
                                                        <button className="text-gray-600 hover:text-gray-800">
                                                            <Edit2 className="w-4 h-4"/>
                                                        </button>
                                                        <button className="text-gray-600 hover:text-gray-800">
                                                            <MoreVertical className="w-4 h-4"/>
                                                        </button>
                                                        <label
                                                            className="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={notice.isPublished}
                                                                onChange={() => togglePublishStatus(notice.id)}
                                                                className="sr-only peer"
                                                            />
                                                            <div
                                                                className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="flex items-center justify-center gap-2 mt-6 mb-6">
                                    <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                                        <ArrowLeft/>
                                    </button>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">3
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">4
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">5
                                    </button>
                                    <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                                        <ArrowRight/>
                                    </button>
                                </div>
                            </>
                        )}
                    </main>
                </div>
            </div>

        </>
    )
}

export default App

