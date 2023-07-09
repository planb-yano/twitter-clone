import { SvgIconPropsSizeOverrides, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { OverridableStringUnion } from "@mui/types";
import React from "react";

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
};

const Icon2: React.FC<Props> = ({ className, icon, fontSize = "large" }) => {
  const Icon = icon;
  return <Icon className={className} fontSize={fontSize} />;
};

export default Icon2;
