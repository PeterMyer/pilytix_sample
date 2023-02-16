import "./styles.css";
import Table from './Table/Table'
import * as opportunities from "./opportunities.json";
import Header from "./Misc/Header";

export default function App() {
  const data = opportunities.default.map((oppObject)=>{
    oppObject.name = oppObject.oppName.slice(13)
    oppObject.type = oppObject.oppName.substring(0,4)
    oppObject.date = oppObject.oppName.substring(6,11)
    return oppObject
  })
  
  return (
    <div >
        <Header/>
        <Table opportunities={data}></Table>
    </div>
  );
}
