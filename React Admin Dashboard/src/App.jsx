import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Students from './Students';
import Fees from './Fees';
import Results from './Results';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewData from './view';
import EditData from './edit';
import DeleteData from './delete';
import StuReg from './Sider_Components/STUDENT COMPONENT/StuReg'
import AddClass from './Sider_Components/CLASS COMPONENT/AddClass'
import DeleteClass from './Sider_Components/CLASS COMPONENT/DeleteClass'
import EditClass from './Sider_Components/CLASS COMPONENT/EditClass'
import ViewClass from './Sider_Components/CLASS COMPONENT/ViewClass'
import AddDiv from './Sider_Components/DIVISION COMPONENT/AddDiv'
import DeleteDiv from './Sider_Components/DIVISION COMPONENT/DeleteDiv'
import EditDiv from './Sider_Components/DIVISION COMPONENT/EditDiv'
import ViewDiv from './Sider_Components/DIVISION COMPONENT/ViewDiv'
import AddExam from './Sider_Components/EXAM COMPONENT/AddExam'
import DeleteExam from './Sider_Components/EXAM COMPONENT/DeleteExam'
import EditExam from './Sider_Components/EXAM COMPONENT/EditExam'
import ViewExam from './Sider_Components/EXAM COMPONENT/ViewExam'
import AddFees from './Sider_Components/FEES COMPONENT/AddFees'
import ManageFees from './Sider_Components/FEES COMPONENT/ManageFees'
import DeleteStu from './Sider_Components/STUDENT COMPONENT/DeleteStu'
import EditStu from './Sider_Components/STUDENT COMPONENT/EditStu'
import ViewStu from './Sider_Components/STUDENT COMPONENT/ViewStu'
import VieStuDetsils from './Sider_Components/STUDENT COMPONENT/VieStuDetsils';
import EditStuDetails from './Sider_Components/STUDENT COMPONENT/EditStuDetails';
import EditResDetails from './Sider_Components/RESULT COMPONENT/EditResDetails';
import Standards from './Standards';
import AddStandard from './AddStandard';
import AddDivision from './AddDivision';
import EditStandards from './EditStandards';
import EditDivisions from './EditDivisions';
import TeachersAdd from './TeachersAdd';
import ViewTeacher from './ViewTeacher';
import EditTeacher from './EditTeacher'
import ViewTeacherDetails from './ViewTeacherDetails';
import AddEvent from './AddEvent';
import ViewEvent from './ViewEvent';
import ViewEventDetails from './ViewEventDetails';
import EditEvent from './EditEvent'
import AddResult from './AddResult';
import ViewResult from './ViewResult';
import EditResult from './EditResult';
import ViewResultDetails from './ViewResultDetails'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/view/:dataType/:id" element={<ViewData />} />
          <Route path="/edit/:dataType/:id" element={<EditData />} />
          <Route path="/delete/:dataType/:id" element={<DeleteData />} />
          <Route path="/addclass" element={<AddClass />} />
          <Route path="/delclass" element={<DeleteClass />} />
          <Route path="/edclass" element={<EditClass />} />
          <Route path="/vieclass" element={<ViewClass />} />
          <Route path="/adddiv" element={<AddDiv />} />
          <Route path="/deldiv" element={<DeleteDiv />} />
          <Route path="/edidiv" element={<EditDiv />} />
          <Route path="/viediv" element={<ViewDiv />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/addexam" element={<AddExam />} />
          <Route path="/delexam" element={<DeleteExam />} />
          <Route path="/editexam" element={<EditExam />} />
          <Route path="/vieexam" element={<ViewExam />} />
          <Route path="/addfees" element={<AddFees />} />
          <Route path="/manfees" element={<ManageFees />} />
          <Route path="/delstu" element={<DeleteStu />} />
          <Route path="/edistu" element={<EditStu />} />
          <Route path="/viestu" element={<ViewStu />} />
          <Route path="/stureg" element={<StuReg />} />
          <Route path="/view/:id" element={<VieStuDetsils />} />
          <Route path="/edit/:id" element={<EditStuDetails />} />
          <Route path="/studentslist" element={<ViewStu />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/addstandard" element={<AddStandard />} />
          <Route path="/adddivision" element={<AddDivision />} />
          <Route path="/editstandards/:id" element={<EditStandards />} />
          <Route path="/editdivision/:id" element={<EditDivisions />} />
          <Route path="/addteacher" element={<TeachersAdd />} />
          <Route path="/manageteacher" element={<ViewTeacher />} />
          <Route path="/editteacher/:id" element={<EditTeacher />} />
          <Route path="/viewteacher/:id" element={<ViewTeacherDetails />} />
          <Route path="/viewevent" element={<ViewEvent />} />
          <Route path="/vieweventdetails/:id" element={<ViewEventDetails />} />
          <Route path="/editeventdetails/:id" element={<EditEvent />} />
          <Route path="/addresult" element={<AddResult />} />
          <Route path="/viewresult" element={<ViewResult />} />
          <Route path="/editresults/:id" element={<EditResult />} />
          <Route path="/homestandards" element={<Standards />} />
          <Route path="/hometeachers" element={<ViewTeacher />} />
          <Route path="/vieres" element={<ViewResult />} />
          <Route path="/viewresults/:id" element={<ViewResultDetails />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
