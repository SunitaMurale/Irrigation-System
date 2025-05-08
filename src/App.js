import React, { useState } from 'react';
import './AdminEmployeeTable.css';
import { FaFilter, FaShareAlt, FaCog } from 'react-icons/fa';

const employeesData = [
  
    {
      "id": 1,
      "name": "Mike Wazowski",
      "position": "UX/UI Designer",
      "skill": "Middle",
      "experience": "1 year 3 months",
      "level": "B1",
      "startDate": "01/24/22",
      "project": "Squiz Mobile",
      "status": "In work"
    },
    {
      "id": 2,
      "name": "Jane Cooper",
      "position": "IT Recruiter",
      "skill": "Junior",
      "experience": "0 years 4 months",
      "level": "B2",
      "startDate": "-",
      "project": "GitNation",
      "status": "Pending"
    },
    {
      "id": 3,
      "name": "Brooklyn Simmons",
      "position": "Event Manager",
      "skill": "Middle",
      "experience": "2 years 11 months",
      "level": "B1",
      "startDate": "05/13/21",
      "project": "Squiz Mobile",
      "status": "In work"
    },
    {
      "id": 4,
      "name": "Wade Warren",
      "position": "Front-End Developer",
      "skill": "Senior",
      "experience": "4 years 3 months",
      "level": "B2",
      "startDate": "05/24/21",
      "project": "IT Solutions",
      "status": "On vacation"
    },
    {
      "id": 5,
      "name": "Eleanor Pena",
      "position": "UX/UI Designer",
      "skill": "Junior",
      "experience": "0 years 3 months",
      "level": "A2+",
      "startDate": "12/01/21",
      "project": "JazzTeam",
      "status": "In work"
    },
    {
      "id": 6,
      "name": "Carl Fredricksen",
      "position": "Backend Developer",
      "skill": "Senior",
      "experience": "5 years 0 months",
      "level": "C1",
      "startDate": "01/01/20",
      "project": "PixarTech",
      "status": "Pending"
    },
    {
      "id": 7,
      "name": "Russell Johnson",
      "position": "QA Tester",
      "skill": "Middle",
      "experience": "2 years 6 months",
      "level": "B1",
      "startDate": "03/18/22",
      "project": "QAGroup",
      "status": "On vacation"
    }
  
  
];

const AdminEmployeeTable = () => {
  const [filter, setFilter] = useState('All');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredData =
    filter === 'All' ? employeesData : employeesData.filter(emp => emp.status === filter);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleFilterSelect = (status) => {
    setFilter(status);
    setShowDropdown(false);
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1>Staff Management System</h1>
      </header>

      <div className="table-container">
        <div className="table-header">
          <div>
            <h2>Your Employees</h2>
            <p>Total: {filteredData.length}</p>
          </div>

          <div className="icons">
            <div className="filter-wrapper">
              <FaFilter onClick={toggleDropdown} className="icon-button" />
              {showDropdown && (
                <div className="filter-dropdown">
                  {['All', 'In work', 'Pending', 'On vacation'].map((status) => (
                    <div
                      key={status}
                      className={`filter-option ${filter === status ? 'selected' : ''}`}
                      onClick={() => handleFilterSelect(status)}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <FaShareAlt className="icon-button" />
            <FaCog className="icon-button" />
          </div>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Skill</th>
              <th>Experience</th>
              <th>ENG Lvl</th>
              <th>Start Date</th>
              <th>Project</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.skill}</td>
                <td>{emp.experience}</td>
                <td>{emp.level}</td>
                <td>{emp.startDate}</td>
                <td className="project-link">{emp.project}</td>
                <td>
                  <span className={`status ${emp.status.replace(' ', '-')}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-count">
          1-{filteredData.length} of {filteredData.length}
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeeTable;
