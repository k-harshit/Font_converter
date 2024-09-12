import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="Hello" />
      {/* <Navbar/> */}
      <div className="container my-3">
        {/* container is a class in bootstrap used to  shrink the area of textform form box */}
        <Textform heading="Enter the text below" />
      </div>
    </>
  );
}

export default App;
