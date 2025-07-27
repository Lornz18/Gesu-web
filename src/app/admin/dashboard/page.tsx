'use client';

import { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  Search, 
  Bell, 
  Menu, 
  X, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Filter,
  Calendar,
  TrendingUp,
  Award,
  UserPlus,
  FileText,
  BarChart3
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const enrollmentData = [
    { id: 1, name: 'John Smith', grade: '10', status: 'Pending', date: '2025-01-15', email: 'john@email.com' },
    { id: 2, name: 'Emma Johnson', grade: '11', status: 'Approved', date: '2025-01-14', email: 'emma@email.com' },
    { id: 3, name: 'Michael Brown', grade: '9', status: 'Rejected', date: '2025-01-13', email: 'michael@email.com' },
    { id: 4, name: 'Sarah Davis', grade: '12', status: 'Pending', date: '2025-01-12', email: 'sarah@email.com' },
  ];

  const gradeData = [
    { id: 1, student: 'John Smith', subject: 'Mathematics', grade: 'A', percentage: 92, teacher: 'Mr. Wilson' },
    { id: 2, student: 'Emma Johnson', subject: 'English', grade: 'B+', percentage: 87, teacher: 'Ms. Anderson' },
    { id: 3, student: 'Michael Brown', subject: 'Science', grade: 'A-', percentage: 89, teacher: 'Dr. Martinez' },
    { id: 4, student: 'Sarah Davis', subject: 'History', grade: 'B', percentage: 84, teacher: 'Mr. Thompson' },
  ];

  const curriculumData = [
    { id: 1, subject: 'Mathematics', grade: '10', modules: 12, status: 'Active', lastUpdated: '2025-01-10' },
    { id: 2, subject: 'English Literature', grade: '11', modules: 8, status: 'Active', lastUpdated: '2025-01-08' },
    { id: 3, subject: 'Biology', grade: '12', modules: 15, status: 'Draft', lastUpdated: '2025-01-05' },
    { id: 4, subject: 'World History', grade: '9', modules: 10, status: 'Active', lastUpdated: '2025-01-03' },
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'enrollments', label: 'Enrollments', icon: UserPlus },
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'Active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Students', value: '1,234', change: '+12%', icon: Users, color: 'blue' },
          { title: 'Pending Enrollments', value: '45', change: '+5%', icon: UserPlus, color: 'yellow' },
          { title: 'Active Courses', value: '28', change: '+2%', icon: BookOpen, color: 'green' },
          { title: 'Average Grade', value: '87.5%', change: '+3.2%', icon: TrendingUp, color: 'purple' },
        ].map((stat, index) => (
          <div key={index} className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 hover:bg-white/25 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New enrollment application', student: 'John Smith', time: '5 minutes ago' },
            { action: 'Grade updated', student: 'Emma Johnson - Mathematics', time: '1 hour ago' },
            { action: 'Curriculum approved', student: 'Biology - Grade 12', time: '2 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                <p className="text-xs text-slate-600">{activity.student}</p>
              </div>
              <span className="text-xs text-slate-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEnrollments = () => (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Online Enrollments</h2>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700/80 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="px-4 py-2 bg-green-600/80 text-white rounded-lg hover:bg-green-700/80 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      {/* Enrollments table */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {enrollmentData.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-slate-800">{enrollment.name}</div>
                      <div className="text-sm text-slate-600">{enrollment.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-800">Grade {enrollment.grade}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(enrollment.status)}`}>
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{enrollment.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100/50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-100/50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100/50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Grade Management</h2>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700/80 transition-colors flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Report Cards</span>
          </button>
          <button className="px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700/80 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Grade</span>
          </button>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Percentage</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Teacher</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {gradeData.map((grade) => (
                <tr key={grade.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 font-medium text-slate-800">{grade.student}</td>
                  <td className="px-6 py-4 text-slate-800">{grade.subject}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                      {grade.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-800">{grade.percentage}%</td>
                  <td className="px-6 py-4 text-slate-600">{grade.teacher}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100/50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100/50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Curriculum Management</h2>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-lg hover:bg-indigo-700/80 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Curriculum</span>
          </button>
          <button className="px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700/80 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Subject</span>
          </button>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Grade Level</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Modules</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {curriculumData.map((curriculum) => (
                <tr key={curriculum.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 font-medium text-slate-800">{curriculum.subject}</td>
                  <td className="px-6 py-4 text-slate-800">Grade {curriculum.grade}</td>
                  <td className="px-6 py-4 text-slate-800">{curriculum.modules} modules</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(curriculum.status)}`}>
                      {curriculum.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{curriculum.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100/50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-100/50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100/50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'enrollments': return renderEnrollments();
      case 'curriculum': return renderCurriculum();
      case 'settings': return (
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 text-center">
          <Settings className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Settings</h3>
          <p className="text-slate-600">Settings panel coming soon...</p>
        </div>
      );
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 backdrop-blur-xl bg-white/20 border-r border-white/30 min-h-screen`}>
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/80 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              {isSidebarOpen && (
                <div>
                  <h1 className="text-lg font-bold text-slate-800">EduAdmin</h1>
                  <p className="text-sm text-slate-600">School Management</p>
                </div>
              )}
            </div>
          </div>

          <nav className="mt-8">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-white/10 transition-colors ${
                  activeTab === item.id ? 'bg-white/20 border-r-2 border-blue-500' : ''
                }`}
              >
                <item.icon className="w-5 h-5 text-slate-600" />
                {isSidebarOpen && <span className="text-slate-700">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="backdrop-blur-xl bg-white/20 border-b border-white/30 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Menu className="w-5 h-5 text-slate-600" />
                </button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search students, grades, curriculum..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-80 bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:bg-white/40 transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg hover:bg-white/20 transition-colors relative">
                  <Bell className="w-5 h-5 text-slate-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <div className="w-8 h-8 bg-blue-600/80 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">A</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}