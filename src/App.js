import './App.css';
import AddComponent from './components/AddComponent';
import AddComponentV2 from './components/AddComponentV2';
import AlertComponent from './components/AlertComponent';
import Welcome from './components/Welcome';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      {/*Su dung props trong component*/}
      <Welcome name='admin' />
      
      {/*Xây dựng Class component*/}
      <AddComponent firstNumber={1} secondNumber={2} />

      {/*Xây dựng Function component*/}
      <AddComponentV2 firstNumber={1} secondNumber={2} />
      
      {/*Xây dựng Alert component*/}
      <AlertComponent alert='Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.' />
      
      {/*Xây dựng ứng dụng máy tính*/}
      <Calculator />
      
      {/*Xây dựng hiển thị danh sách sinh viên*/}
      
    </>
  );
}

export default App;
