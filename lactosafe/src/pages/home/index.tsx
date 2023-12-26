import * as React from "react";
import Header from "../../shared/header";
import { AuthContext } from "../../context/auth-context";
import { getRole } from "../../services/login-service";
import { getHeaderFilter } from "../../services/header-service";
import LactoSafeTab from "../../shared/common/lacto-safe-tab";
import './home.scss';

const Home: React.FC = () => {
  const { userData, setRole,role } = React.useContext(AuthContext);
  const [header, setHeader] = React.useState<any>(null);
  const [headerList, setheaderList] = React.useState<any>(null);
  const [tableHeader, settableHeader] = React.useState()

  React.useEffect(() => {
    getRole(userData?.email)
      .then((response) => {
        console.log(response)
        setRole(response.role)})
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    console.log(role)
    if(role){
    getHeaderFilter(role)
      .then((res) => setHeader(res.data))
      .catch((err) => console.log(err));
  }}, [role]);


  React.useEffect(()=>{
    setHeaderList()
  },[header]);
  const setHeaderList=()=>{
  
 let headerLIstArray =[];
if(header){

    for (const [key, value] of Object.entries(header)) {
      headerLIstArray.push(key)
    }
    
  }

  setheaderList(headerLIstArray)
  }

  const onChangeTabs=(event:any,newValue:number)=>{
    

 // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   console.log(header[headerList[newValue]])

    

  }
  return (
    <div className="home-conatiner column p-3">
      <div className="header mb-3">
      <Header></Header>

      </div>
      <div className="tabs">
      <LactoSafeTab tabList={headerList}  onChangeTab={onChangeTabs}></LactoSafeTab>
      </div>
    </div>
  );
};

export default Home;
