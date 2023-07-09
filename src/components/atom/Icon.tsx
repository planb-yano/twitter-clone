import React from "react";
import { css } from "@emotion/react";

type Props = {
  className?: string;
  src: string;
  width: number;
  height: number;
};

const Icon: React.FC<Props> = ({ className, src, width, height }) => {
  return (
    <img
      css={styles.base}
      className={className}
      src={src}
      alt=""
      width={width}
      height={height}
    />
  );
};

const styles = {
  base: css`
    object-fit: contain;
  `,
};

export default Icon;
