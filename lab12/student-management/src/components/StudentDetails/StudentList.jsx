import StudentCard from "./Studentcard";

function StudentList() {

    const [count,setCount]=useState(0)
    let count1=0;
    const renderlist=[];

  const students = [
    {
      id: 1,
      rollNo: 101,
      name: "rakshata",
      age: 20,
      class: "BCA",
      course: "Computer Science",
    },
    {
      id: 2,
      rollNo: 102,
      name: "sneha",
      age: 21,
      class: "BCA",
      course: "Information Technology",
    },
    {
      id: 3,
      rollNo: 103,
      name: "sweta",
      age: 19,
      class: "BCA",
      course: "Computer Engineering",
    },
  ];

  const render = [];

  for (let i = 0; i < students.length; i++) {
    render.push(
      <StudentCard
        key={students[i].id}
        rollNo={students[i].rollNo}
        name={students[i].name}
        age={students[i].age}
        class={students[i].class}
        course={students[i].course}
      />
    );
  }
    
  return <div>{render}</div>;

}

export default StudentList;

