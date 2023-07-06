import Students from "./index.js";
const Tablestudent = () => {
  return (
    <div>
      {Students.map((student) => (
        <>
          <tr>
            <td>Company</td>
            <td>Contact</td>
            <td>Country</td>
          </tr>
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        </>
      ))}
    </div>
  );
};
export default Tablestudent;
