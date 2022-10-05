
const StudentList = () => {

  
  
  let html = (
    <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Address</th>
      </tr>
  )

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
      {html}
    </tbody>
  </table>
  )
}