import React, { useReducer } from "react";


const initialStudents = [
  { id: 1, name: "Sudheer", status: null },
  { id: 2, name: "Madav", status: null },
  { id: 3, name: "Sai", status: null },
  { id: 4, name: "Akash", status: null },
];


function attendanceReducer(state, action) {
  switch (action.type) {
    case "MARK_PRESENT":
      return state.map(student =>
        student.id === action.id ? { ...student, status: "Present" } : student
      );
    case "MARK_ABSENT":
      return state.map(student =>
        student.id === action.id ? { ...student, status: "Absent" } : student
      );
    case "RESET":
      return state.map(student => ({ ...student, status: null }));
    default:
      return state;
  }
}

export default function AttendanceApp() {
  const [students, dispatch] = useReducer(attendanceReducer, initialStudents);

  return (
    <div style={{ padding: "20px" }}>
      <h2> Student Attendance</h2>

      
      {students.map(student => (
        <div key={student.id} style={{ marginBottom: "10px" }}>
          <span style={{ marginRight: "15px" }}>{student.name}</span>
          <button
            onClick={() => dispatch({ type: "MARK_PRESENT", id: student.id })}
          >
            Present
          </button>
          <button
            onClick={() => dispatch({ type: "MARK_ABSENT", id: student.id })}
            style={{ marginLeft: "10px" }}
          >
            Absent
          </button>
        </div>
      ))}

      
      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{ marginTop: "20px", backgroundColor: "lightcoral" }}
      >
        Reset Attendance
      </button>

     
      <h3 style={{ marginTop: "30px" }}> Final Attendance</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.status || "Not Marked"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
