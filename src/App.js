import Header from './Components/Header/Header';
import React from 'react';
import Body from './Components/Body/Body';
import Home from './Components/Pages/Home/Home';
import StudentsTable from './Components/Pages/StudentsTable/StudentsTable';
import ProfesorsTable from './Components/Pages/ProfesorsTable/ProfesorsTable';
import ExamsTable from './Components/Pages/ExamsTable/ExamsTable';
import SubjectsTable from './Components/Pages/SubjectsTable/SubjectsTable';
import ConsultRegisteredStudents from './Components/Pages/ConsultRegisteredStudents/ConsultRegisteredStudents';
import ConsultStudentsPerShift from './Components/Pages/ConsultStudentsPerShift/ConsultStudentsPerShift';
import ConsultApprovedStudents from './Components/Pages/ConsultApprovedStudents/ConsultApprovedStudents';
import ConsultShifts from './Components/Pages/ConsultShifts/ConsultShifts';
import AddStudentForm from './Components/Pages/AddStudentForm/AddStudentForm';
import AddProfesorForm from './Components/Pages/AddProfesorForm/AddProfesorForm';
import AddExamForm from './Components/Pages/AddExamForm/AddExamForm';
import AddSubjectForm from './Components/Pages/AddSubjectForm/AddSubjectForm';
import ModifyStudentForm from './Components/Pages/ModifyStudentForm/ModifyStudentForm';
import ModifyProfesorForm from './Components/Pages/ModifyProfesorForm/ModifyProfesorForm';
import ModifyExamForm from './Components/Pages/ModifyExamForm/ModifyExamForm';
import ModifySubjectForm from './Components/Pages/ModifySubjectForm/ModifySubjectForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app-style'>
      <Header />
      <Body>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/StudentsTable" element={<StudentsTable/>} />
            <Route path="/ProfesorsTable" element={<ProfesorsTable/>} />
            <Route path="/ExamsTable" element={<ExamsTable/>} />
            <Route path="/SubjectsTable" element={<SubjectsTable/>} />
            <Route path="/ConsultRegisteredStudents" element={<ConsultRegisteredStudents/>} />
            <Route path="/ConsultStudentsPerShift" element={<ConsultStudentsPerShift/>} />
            <Route path="/ConsultApprovedStudents" element={<ConsultApprovedStudents/>} />
            <Route path="/ConsultShifts" element={<ConsultShifts/>} />
            <Route path="/AddStudentForm" element={<AddStudentForm/>} />
            <Route path="/AddProfesorForm" element={<AddProfesorForm/>} />
            <Route path="/AddExamForm" element={<AddExamForm/>} />
            <Route path="/AddSubjectForm" element={<AddSubjectForm/>} />
            <Route path="/ModifyStudentForm" element={<ModifyStudentForm/>} />
            <Route path="/ModifyProfesorForm" element={<ModifyProfesorForm/>} />
            <Route path="/ModifyExamForm" element={<ModifyExamForm/>} />
            <Route path="/ModifySubjectForm" element={<ModifySubjectForm/>} />
          </Routes>
        </Router>
      </Body>
    </div>
  );
}

export default App;