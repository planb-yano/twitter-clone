import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import Icon2 from "../atom/Icon2";
import { css } from "@emotion/react";

type Props = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  activeIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  children: React.ReactNode;
  className?: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  name: string;
};

const MenuListItem: React.FC<Props> = ({
  className,
  icon,
  activeIcon,
  children,
  active,
  setActive,
  name,
}) => {
  const handleActive = () => {
    if (name) {
      setActive(name);
    } else {
      return;
    }
  };
  return (
    <div css={styles.base} className={className} onClick={handleActive}>
      <Icon2 icon={active === name ? activeIcon : icon} />
      <span css={styles.text(active, name)}>{children}</span>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 9999px;
    padding: 5px 20px;
    transition: all 0.1s;
    width: fit-content;
    &:hover {
      background-color: #efefef;
    }
  `,
  text: (active: string, name: string) => css`
    font-size: 20px;
    margin-left: 10px;
    ${active === name &&
    css`
      font-weight: bold;
    `}
  `,
};

export default MenuListItem;
