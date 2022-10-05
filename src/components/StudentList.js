
const studentList = [
  {
    id: 1,
    name: 'Tho',
    age: 27,
    address: 'unknow'
  },
  {
    id: 2,
    name: 'Tung',
    age: 24,
    address: 'unknow'
  },
  {
    id: 3,
    name: 'Tuyen',
    age: 25,
    address: 'unknow'
  },
]

const StudentList = () => {
  let htmlRender = [];

  studentList.forEach((item, index) => {

    
    let html = (
      <tr key={index}>
        <th scope="col">{item.id}</th>
        <th scope="col">{item.name}</th>
        <th scope="col">{item.age}</th>
        <th scope="col">{item.address}</th>
      </tr>
    );
    htmlRender.push(html);
  })
  
  

  return (
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
    <tbody>
      {htmlRender}
    </tbody>
  </table>
  )
}

export default StudentList;