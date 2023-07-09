import React from "react";
import PrimaryButton from "../atom/PrimaryButton";
import Icon from "../atom/Icon";
import { css } from "@emotion/react";

type Props = {
  className?: string;
};

const ButtonContainIcon: React.FC<Props> = ({ className }) => {
  return (
    <PrimaryButton css={styles.button} className={className}>
      <Icon css={styles.icon} src={"/search.png"} width={20} height={20} />
      <span>Googleでログイン</span>
    </PrimaryButton>
  );
};

const styles = {
  button: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  icon: css`
    margin-right: 8px;
  `,
};

export default ButtonContainIcon;
