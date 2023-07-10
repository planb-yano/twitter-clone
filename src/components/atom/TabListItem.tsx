import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  name: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const TabListItem: React.FC<Props> = ({
  children,
  name,
  active,
  setActive,
}) => {
  const handleTab = () => {
    setActive(name);
  };
  return (
    <div css={styles.base} onClick={handleTab}>
      <div css={styles.wrapper}>
        <span>{children}</span>
        <div css={styles.bar(active, name)}></div>
      </div>
    </div>
  );
};

const styles = {
  base: css`
    position: relative;
    padding: 10px 80px 15px;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background-color: #dadada;
    }
  `,
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  bar: (active: string, name: string) => css`
    ${active === name &&
    css`
      position: absolute;
      width: 63px;
      height: 4px;
      background-color: #0ea9fd;
      border-radius: 5px;
      bottom: 0;
    `}
  `,
};

export default TabListItem;
