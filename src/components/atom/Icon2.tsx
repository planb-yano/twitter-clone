import {
  SvgIconPropsColorOverrides,
  SvgIconPropsSizeOverrides,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { OverridableStringUnion } from "@mui/types";
import React from "react";
import { css } from "@emotion/react";

type Props = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  className?: string;
  fontSize?:
    | OverridableStringUnion<
        "medium" | "small" | "inherit" | "large",
        SvgIconPropsSizeOverrides
      >
    | undefined;
  color?:
    | OverridableStringUnion<
        | "disabled"
        | "inherit"
        | "action"
        | "primary"
        | "secondary"
        | "error"
        | "info"
        | "success"
        | "warning",
        SvgIconPropsColorOverrides
      >
    | undefined;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Icon2: React.FC<Props> = ({
  className,
  icon,
  fontSize = "large",
  color,
  active,
  setActive,
}) => {
  const Icon = icon;
  const handleIcon = () => {
    if (setActive) {
      setActive(!active);
    }
  };

  return (
    <Icon
      css={styles.base}
      className={className}
      fontSize={fontSize}
      color={color}
      onClick={handleIcon}
    />
  );
};

const styles = {
  base: css`
    cursor: pointer;
  `,
};

export default Icon2;
