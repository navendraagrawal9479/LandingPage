import { Stack } from "@mui/system";
import React from "react";
import Content from "./Content";
import { useSelector } from "react-redux";

const SideContent = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <Stack direction="column" gap={2} flex={1} sx={{ marginRight: "100px" }}>
      {data.map((item, index) => {
        return <Content heading={item.title} body={item.body} key={index} />;
      })}
    </Stack>
  );
};

export default SideContent;
