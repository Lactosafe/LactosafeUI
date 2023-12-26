import * as React from "react";
import Header from "../../shared/header";
import { AuthContext } from "../../context/auth-context";
import { getRole } from "../../services/login-service";
import { getHeaderFilter } from "../../services/header-service";
import LactoSafeTab from "../../shared/common/lacto-safe-tab";
import "./home.scss";
import LactoSafeTable from "../../shared/common/lacto-safe-table";

const Home: React.FC = () => {
  const { userData, setRole, role } = React.useContext(AuthContext);
  const [header, setHeader] = React.useState<any>(null);
  const [headerList, setheaderList] = React.useState<any>(null);
  const [tableHeader, settableHeader] = React.useState<Array<string>>([]);
  const [tableRowData, settableRowData] = React.useState<Array<Array<string>>>([])

  React.useEffect(() => {
    getRole(userData?.email)
      .then((response) => {
        setRole(response.role);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    console.log(role);
    if (role) {
      getHeaderFilter(role)
        .then((res) => setHeader(res.data))
        .catch((err) => console.log(err));
    }
  }, [role]);

  React.useEffect(() => {
    setHeaderList();
  }, [header]);

  React.useEffect(() => {
    onChangeTabs(0);
  }, [headerList]);
  const setHeaderList = () => {
    let headerLIstArray = [];
    if (header) {
      for (const [key, value] of Object.entries(header)) {
        headerLIstArray.push(key);
      }
    }

    setheaderList(headerLIstArray);
  };

  const onChangeTabs = (newValue: number) => {
    let headerListArray = [];
    let finalTableData:any = [];
    console.log("header", header);
    if (header) {
      for (const [key, value] of Object.entries(
        header[headerList[newValue]]?.participant[0]
      )) {
        headerListArray.push(key);
      }
      settableHeader(headerListArray);
      header[headerList[newValue]]?.participant?.map((rowData: any) => {
        let rowDataArrayList = [];
        for (const [key, value] of Object.entries(rowData)) {
          rowDataArrayList.push(value);
        }

        console.log("rowDataArrayList", rowDataArrayList);
        finalTableData.push(rowDataArrayList);
        console.log("finalTableData", finalTableData);
      });

      settableRowData(finalTableData)
    }
  };

  return (
    <div className="home-conatiner column p-3">
      <div className="header mb-3">
        <Header></Header>
      </div>
      <div className="tabs">
        <LactoSafeTab
          tabList={headerList}
          onChangeTab={onChangeTabs}
        ></LactoSafeTab>
      </div>
      <div className="table-container">
        <LactoSafeTable
          title={tableHeader}
          rowData={tableRowData}
        ></LactoSafeTable>
      </div>
    </div>
  );
};

export default Home;
