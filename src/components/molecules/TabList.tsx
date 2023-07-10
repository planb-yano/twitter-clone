import React, { useState } from "react";
import TabListItem from "../atom/TabListItem";
import { css } from "@emotion/react";

const TabList = () => {
  const [active, setActive] = useState<string>("おすすめ");
  return (
    <div css={styles.base}>
      <TabListItem name={"おすすめ"} active={active} setActive={setActive}>おすすめ</TabListItem>
      <TabListItem name={"フォロー中"} active={active} setActive={setActive}>フォロー中</TabListItem>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
  `,
};

export default TabList;
