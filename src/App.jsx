import React, {useState} from 'react';
import './App.css';
import {Bell, Calendar, Plus, Edit2, MoreVertical, Eye} from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";
// import data from "../public/data.json";

function App() {
    const [notices, setNotices] = useState([
        {
            id: 1,
            title: 'Office closed on Friday for maintenance.',
            noticeType: 'General / Company-Wide',
            department: 'All Department',
            publishedOn: '15-Jun-2025',
            status: 'Published',
            isPublished: true
        }
    ]);

    const [selectedNotices, setSelectedNotices] = useState([]);

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

  return (
    <>
        <div className="flex h-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Good Afternoon Asif</h1>
                            <p className="text-sm text-gray-500">13 June, 2026</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">Asif Riaj</span>
                                <span className="text-xs text-gray-500">Hr</span>
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-auto px-8 py-6">
                    <div className="mb-6">
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

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">Filter by:</span>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                                <option>Departments or individuals</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Employee Id or Name"
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-48"
                            />
                            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                                <option>Status</option>
                            </select>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Published on
                            </button>
                            <button className="text-sm text-blue-600 hover:underline">Reset Filters</button>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 py-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Create Notice
                            </button>
                            <button className="px-5 py-2.5 border border-orange-500 text-orange-500 rounded-lg text-sm font-medium hover:bg-orange-50 flex items-center gap-2">
                                <Edit2 className="w-4 h-4" />
                                All Draft Notice
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    <input type="checkbox" className="rounded" />
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Notice Type</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Departments/Individual</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Published On</th>
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
                                        <span className={getDepartmentColor(notice.department)}>{notice.department}</span>
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
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-600 hover:text-gray-800">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-600 hover:text-gray-800">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={notice.isPublished}
                                                    onChange={() => togglePublishStatus(notice.id)}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                            ←
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">4</button>
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">5</button>
                        <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                            →
                        </button>
                    </div>
                </main>
            </div>
        </div>
        );
    </>
  )
}

export default App

