import React from 'react';
import {ArrowLeft, Upload, Check} from "lucide-react";

const Form = ({ onBack, formData, onInputChange, uploadedFiles, onFileUpload, onRemoveFile }) => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h2 className="text-2xl font-semibold text-gray-800">Create a Notice</h2>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-base font-medium text-gray-700 mb-6">Please fill in the details below</h3>

                <div className="space-y-6">
                    {/* Target Department */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <span className="text-red-500">*</span> Target Department(s) or Individual
                        </label>
                        <select
                            value={formData.targetDepartment}
                            onChange={(e) => onInputChange('targetDepartment', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Individual">Individual</option>
                            <option value="All Department">All Department</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales Team">Sales Team</option>
                            <option value="Web Team">Web Team</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>

                    {/* Notice Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <span className="text-red-500">*</span> Notice Title
                        </label>
                        <input
                            type="text"
                            placeholder="Write the Title of Notice"
                            value={formData.noticeTitle}
                            onChange={(e) => onInputChange('noticeTitle', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Employee Details Row */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <span className="text-red-500">*</span> Select Employee ID
                            </label>
                            <select
                                value={formData.employeeId}
                                onChange={(e) => onInputChange('employeeId', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select employee designation</option>
                                <option value="EMP001">EMP001</option>
                                <option value="EMP002">EMP002</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <span className="text-red-500">*</span> Employee Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter employee full name"
                                value={formData.employeeName}
                                onChange={(e) => onInputChange('employeeName', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <span className="text-red-500">*</span> Position
                            </label>
                            <select
                                value={formData.position}
                                onChange={(e) => onInputChange('position', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select employee department</option>
                                <option value="Manager">Manager</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                            </select>
                        </div>
                    </div>

                    {/* Notice Type and Publish Date Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <span className="text-red-500">*</span> Notice Type
                            </label>
                            <select
                                value={formData.noticeType}
                                onChange={(e) => onInputChange('noticeType', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Notice Type</option>
                                <option value="General">General / Company-Wide</option>
                                <option value="Holiday">Holiday & Event</option>
                                <option value="HR">HR & Policy Update</option>
                                <option value="Finance">Finance & Payroll</option>
                                <option value="IT">IT / System Maintenance</option>
                                <option value="Emergency">Emergency / Urgent</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <span className="text-red-500">*</span> Publish Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={formData.publishDate}
                                    onChange={(e) => onInputChange('publishDate', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Select Publishing Date"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notice Body */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Notice Body
                        </label>
                        <textarea
                            placeholder="Write the details about notice"
                            value={formData.noticeBody}
                            onChange={(e) => onInputChange('noticeBody', e.target.value)}
                            rows="6"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Upload Attachments */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Attachments (optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <input
                                type="file"
                                multiple
                                accept=".jpg,.png,.pdf"
                                onChange={onFileUpload}
                                className="hidden"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <Upload className="w-12 h-12 text-teal-500 mx-auto mb-3" />
                                <p className="text-sm text-gray-600">
                                    <span className="text-teal-500 font-medium">Upload</span> nominee profile image or drag and drop.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Accepted File Type: jpg, png</p>
                            </label>
                        </div>

                        {/* Uploaded Files List */}
                        {uploadedFiles.length > 0 && (
                            <div className="mt-4 space-y-2">
                                {uploadedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                                        <Paperclip className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm text-gray-700 flex-1">{file.name}</span>
                                        <button
                                            onClick={() => onRemoveFile(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-8">
                    <button
                        onClick={onBack}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50"
                    >
                        Save as Draft
                    </button>
                    <button
                        className="px-6 py-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 flex items-center gap-2"
                    >
                        <Check className="w-4 h-4" />
                        Publish Notice
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Form
