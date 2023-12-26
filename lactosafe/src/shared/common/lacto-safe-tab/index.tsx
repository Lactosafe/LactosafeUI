import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";


interface Props {
  tabList: Array<String>;
  initialValue?: number;
  onChangeTab: (newValue:number) => void;
}

const LactoSafeTab: React.FC<Props> = ({ tabList, initialValue, onChangeTab }) => {
const [value, setvalue] = useState(0)

  const handleChange = (event: React.SyntheticEvent,newValue:number) => {
    setvalue(newValue)
    onChangeTab(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} aria-label="tabs">
      {tabList?.map((tab,index) => (
        <Tab  key={index}label={tab}></Tab>
      ))}
    </Tabs>
  );
};

export default LactoSafeTab;
