import Project1 from "./components/Project1"
import Project2 from "./components/Project2"
import Project3 from "./components/Project3"
import Project4 from "./components/Project4"
import Project5 from "./components/Project5"
import Project6 from "./components/Project6"
import Project7 from "./components/Project7"
import Project8 from "./components/Project8"
import Project9 from "./components/Project9"
import accordionData from "./data"

const App = () => {
  return (
    <div>
      <Project1></Project1>     
      <Project2></Project2> 
      <Project3></Project3>
      <Project4></Project4>
      <Project5></Project5>
      <Project6></Project6>
      <Project7></Project7>
      <Project8></Project8>
      <div className=" bg-black text-white w-full h-[100vh] flex justify-center items-center">
        {
          accordionData.map(({id,title,content})=>(
            <Project9 key={id} title={title} content={content} ></Project9>
          ))
        }
      </div>
    </div>
  )
}

export default App
