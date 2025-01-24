import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SideMenu from "../utils/SideMenu";
// import { links } from "../utils/sidebarlinks.json"
import { BsSearch } from "react-icons/bs";
import one from "../assets/dash/marks.png";
import AlumniMentorSelection from "../assets/dash/securityscan.png";
import AssignmentMarks from "../assets/dash/caMarks.png";
import BookAppointment from "../assets/dash/auth.png";
import CampusTour from "../assets/dash/threed.png";
import ChangeUMSPassword from "../assets/dash/request_status.png";
import ContinueExitUndertaking from "../assets/dash/de-reg.png";
import DoctorAppointment from "../assets/dash/doctor.png";
import DocumentUploadPage from "../assets/dash/checklist.png";
import ElectivesPolling from "../assets/dash/register_backlog.png";
import EMAreaPreference from "../assets/dash/krakpi.png";
import ExamAttendance from "../assets/dash/dpr.png";
import FeePaymentSchedule from "../assets/dash/fee_status.png";
import FeeStatement from "../assets/dash/fee_status.png";
import GuestLecture from "../assets/dash/krakpi.png";
import HostelLeaveSlip from "../assets/dash/verify.png";
import Inventory from "../assets/dash/inventory.png";
import LabFeedback from "../assets/dash/dpr.png";
import LanguageLabSlotBooking from "../assets/dash/apply_leave.png";
import LectureFeedback from "../assets/dash/dpr.png";
import LibraryResourceFeedback from "../assets/dash/polling.png";
import LogRMSRequest from "../assets/dash/log_request.png";
import MakeUpAdjustment from "../assets/dash/makeup_adjustment.png";
import MessFoodFeedback from "../assets/dash/register_backlog.png";
import MessFoodScanner from "../assets/dash/dpr.png";
import OpenElectiveCoursePreference from "../assets/dash/attendance_rectification.png";
import PEPActivities from "../assets/dash/register_backlog.png";
import PlacementBarcodeScanner from "../assets/dash/qr-code.png";
import PlacementDrive from "../assets/dash/register_backlog.png";
import PlacementDriveSummary from "../assets/dash/krakpi.png";
import RailwayConcessionForm from "../assets/dash/dpr.png";
import ReAppearRegistration from "../assets/dash/hrdc.png";
import ResetInternetPassword from "../assets/dash/log_request.png";
import ResidentialReportingSlip from "../assets/dash/securityscan.png";
import RMSRequestStatus from "../assets/dash/request_status.png";
import SkillDevelopmentFeedback from "../assets/dash/dpr.png";
import SpecialFoodServices from "../assets/dash/register_backlog.png";
import StudentClassFeedback from "../assets/dash/dpr.png";
import SummerTermRegistration from "../assets/dash/dpr.png";
import TeacheronLeave from "../assets/dash/marks.png";
import Timetable from "../assets/dash/time_table.png";
import TransportFacilityPreference from "../assets/dash/dpr.png";
import UniHospitalHelpLine from "../assets/dash/helpline.png";
import VendorFacilitySearch from "../assets/dash/dpr.png";
import ViewMarks from "../assets/dash/marks.png";
import VisitorGatePass from "../assets/dash/barrier.png";

import shiva_img from "../assets/images/shiva_ums.jpeg";
import mourya_img from "../assets/images/mourya_ums.jpeg";
import adithya_img from "../assets/images/adithya_ums.jpeg";
import chaitu_img from "../assets/images/chaitu_ums.jpeg";
import sahit_img from "../assets/images/sahit_ums.jpeg";
import usJson from "../utils/us.json";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    // opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.1,
      // type: "spring",
      ease: "easeInOut",
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 1.5,
      x: "-100%",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const data = {
  links: [
    {
      id: 1,
      text: "Alumni Mentor Selection",
      imageURL: AlumniMentorSelection,
      url: "/loading",
    },
    {
      id: 2,
      text: "Assignment Marks",
      imageURL: AssignmentMarks,
      url: "/loading",
    },
    {
      id: 3,
      text: "Book Appointment",
      imageURL: BookAppointment,
      url: "/loading",
    },
    {
      id: 4,
      text: "Campus Tour",
      imageURL: CampusTour,
      url: "/loading",
    },
    {
      id: 5,
      text: "Change UMS Password",
      imageURL: ChangeUMSPassword,
      url: "/loading",
    },
    {
      id: 6,
      text: "Continue Exit Undertaking",
      imageURL: ContinueExitUndertaking,
      url: "/loading",
    },
    {
      id: 7,
      text: "Doctor Appointment",
      imageURL: DoctorAppointment,
      url: "/loading",
    },
    {
      id: 8,
      text: "Document Upload Page",
      imageURL: DocumentUploadPage,
      url: "/loading",
    },
    {
      id: 9,
      text: "Electives Polling",
      imageURL: ElectivesPolling,
      url: "/loading",
    },
    {
      id: 10,
      text: "EM Area Preference",
      imageURL: EMAreaPreference,
      url: "/loading",
    },
    {
      id: 11,
      text: "Exam Attendance",
      imageURL: ExamAttendance,
      url: "/loading",
    },
    {
      id: 12,
      text: "Fee Payment Schedule",
      imageURL: FeePaymentSchedule,
      url: "/loading",
    },
    {
      id: 13,
      text: "Fee Statement",
      imageURL: FeeStatement,
      url: "/loading",
    },
    {
      id: 14,
      text: "Guest Lecture/Workshop Feedback",
      imageURL: GuestLecture,
      url: "/loading",
    },
    {
      id: 15,
      text: "Hostel Leave Slip",
      imageURL: HostelLeaveSlip,
      url: "/loading",
    },
    {
      id: 16,
      text: "Central ",
      imageURL: Inventory,
      url: "/central"
    },
    {
      id: 17,
      text: "north",
      imageURL: LabFeedback,
      url: "/north",
    },
    {
      id: 18,
      text: "Language Lab Slot Booking",
      imageURL: LanguageLabSlotBooking,
      url: "/loading",
    },
    {
      id: 19,
      text: "Lecture Feedback",
      imageURL: LectureFeedback,
      url: "/loading",
    },
    {
      id: 20,
      text: "Library Resource Feedback",
      imageURL: LibraryResourceFeedback,
      url: "/loading",
    },
    {
      id: 21,
      text: "Log RMS Request",
      imageURL: LogRMSRequest,
      url: "/",
    },
    {
      id: 22,
      text: "Make Up Adjustment",
      imageURL: MakeUpAdjustment,
      url: "/loading",
    },
    {
      id: 23,
      text: "Mess Food Feedback",
      imageURL: MessFoodFeedback,
      url: "/loading",
    },
    {
      id: 24,
      text: "Mess Food Scanner",
      imageURL: MessFoodScanner,
      url: "/mess",
    },
    {
      id: 25,
      text: "Open Elective Course Preference",
      imageURL: OpenElectiveCoursePreference,
      url: "/loading",
    },
    {
      id: 26,
      text: "PEP Activities",
      imageURL: PEPActivities,
      url: "/loading",
    },
    {
      id: 27,
      text: "Placement Barcode Scanner",
      imageURL: PlacementBarcodeScanner,
      url: "/loading",
    },
    {
      id: 28,
      text: "Placement Drive",
      imageURL: PlacementDrive,
      url: "/loading",
    },
    {
      id: 29,
      text: "Placement Drive Summary",
      imageURL: PlacementDriveSummary,
      url: "/loading",
    },
    {
      id: 30,
      text: "Railway Concession Form",
      imageURL: RailwayConcessionForm,
      url: "/loading",
    },
    {
      id: 31,
      text: "ReAppear Registration",
      imageURL: ReAppearRegistration,
      url: "/loading",
    },
    {
      id: 32,
      text: "Reset Internet Password",
      imageURL: ResetInternetPassword,
      url: "/loading",
    },
    {
      id: 33,
      text: "Residential Reporting Slip",
      imageURL: ResidentialReportingSlip,
      url: "/reporting",
    },
    {
      id: 34,
      text: "RMS Request Status",
      imageURL: RMSRequestStatus,
      url: "/loading",
    },
    {
      id: 35,
      text: "Skill Development Feedback",
      imageURL: SkillDevelopmentFeedback,
      url: "/loading",
    },
    {
      id: 36,
      text: "Special Food Services",
      imageURL: SpecialFoodServices,
      url: "/loading",
    },
    {
      id: 37,
      text: "Student Class Feedback",
      imageURL: StudentClassFeedback,
      url: "/loading",
    },
    {
      id: 38,
      text: "Summer Term Registration",
      imageURL: SummerTermRegistration,
      url: "/loading",
    },
    {
      id: 39,
      text: "Teacher on Leave",
      imageURL: TeacheronLeave,
      url: "/loading",
    },
    {
      id: 40,
      text: "Time table",
      imageURL: Timetable,
      url: "/loading",
    },
    {
      id: 41,
      text: "Transport Facility Preference",
      imageURL: TransportFacilityPreference,
      url: "/loading",
    },
    {
      id: 42,
      text: "Uni Hospital Help Line",
      imageURL: UniHospitalHelpLine,
      url: "/loading",
    },
    {
      id: 43,
      text: "Vendor Facility Search",
      imageURL: VendorFacilitySearch,
      url: "/loading",
    },
    {
      id: 44,
      text: "View Marks",
      imageURL: ViewMarks,
      url: "/loading",
    },
    {
      id: 45,
      text: "Visitor Gate Pass",
      imageURL: VisitorGatePass,
      url: "/loading",
    },
  ],
};

const Sidebar = ({ isOpen, onClose }) => {
  const studentName = "sahit";
  const studentInfo = usJson[studentName];
  const personalInfo = studentInfo.personal_info;
  const reportingInfo = studentInfo.reporting_slip;

  const [menuData, setMenuData] = useState({ sidebarlinks: [] });
  const [filteredMenuData, setFilteredMenuData] = useState([]);

  useEffect(() => {
    setMenuData({ sidebarlinks: data.links });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredData = menuData.sidebarlinks.filter((link) =>
      link.text.toLowerCase().includes(searchText)
    );
    setFilteredMenuData(filteredData);
  };

  const menuItems =
    filteredMenuData.length > 0 ? filteredMenuData : menuData.sidebarlinks;
  return (
    <motion.div
      variants={variants}
      initial={{ opacity: 0, x: "-100%" }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      className={`fixed inset-y-0  shadow-[10px_0px_190px_-15px_rgba(0,0,0,0.3)] shadow-black  left-0 w-[75%] h-[100%]  bg-white    shadow-r-2xl transition-all duration-300 ease-in-out transform
       `}
    >
      {/* <button onClick={onClose}></button> */}
      <div className="flex w-full flex-col h-64 bg-gradient-to-r from-[#fc7b73] shadow-[0px_11px_32px_-26px_rgba(0,0,0,0.3)] shadow-black to-[#ffd97a] items-center justify-center">
        <a href="/profile">
          <span className="  shadow-xl  rounded-full">
            <img
              className="w-24 h-24    shadow-2xl rounded-full"
              src={sahit_img}
              alt=""
            />
          </span>
        </a>
        <h1 className="text-black font-semibold">{personalInfo.name}</h1>
        <p className="text-xs text-black tracking-wider py-1">
          {personalInfo.reg}
        </p>
        <p className="text-xs text-black tracking-wider text-center">
          {personalInfo.program}
        </p>
      </div>

      <div className="px-3 py-2 mt-1">
        <div className="flex items-center bg-gray-200  rounded-lg">
          <BsSearch className="ml-3 text-xl text-gray-500" />
          <input
            className="w-full  h-9 px-3 text-light rounded-lg bg-gray-200 focus:outline-none focus:border-black"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className=" flex flex-col mt-1 overflow-y-scroll no-scrollbar h-[80%]">
        {menuItems.map((link) => (
          <a href={link.url} key={link.id}>
            <SideMenu text={link.text} imageURL={link.imageURL} />
          </a>
        ))}
      </div>

      <div className="fixed  flex w-full p-4   items-center justify-center bottom-0 border-t bg-white">
        <button
          onClick={() => setOpen(true)}
          className="text-black bg-gradient-to-r from-[#fc7b73] to-[#ffd97a] w-[100%] rounded-full py-2 text-sm tracking-wider shadow-md shadow-gray-600"
        >
          LOGOUT
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
