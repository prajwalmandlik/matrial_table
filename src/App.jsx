import React from "react";
import Administration from "./Administration";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PricingTools from "./PricingTools";

const App = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Administration" value="1" />
              <Tab label="Pricing Tools" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Administration />
          </TabPanel>
          <TabPanel value="2">
            <PricingTools />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default App;
