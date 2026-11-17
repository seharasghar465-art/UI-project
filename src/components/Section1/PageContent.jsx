import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageContent = (props) => {
  return (
    <div className="flex w-full mt-15 justify-start gap-10">
      <LeftContent />
      <RightContent data={props.data} />
    </div>
  );
};

export default PageContent;
