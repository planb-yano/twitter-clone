import React from "react";
import SecondaryButton from "../atom/SecondaryButton";
import Icon from "../atom/Icon";
import { css } from "@emotion/react";

type Props = {
  className?: string;
};

const ButtonContainIcon: React.FC<Props> = ({ className }) => {
  return (
    <SecondaryButton css={styles.button} className={className}>
      <Icon css={styles.icon} src={"/img/ico-google.png"} width={20} height={20} />
      <span>Googleでログイン</span>
    </SecondaryButton>
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
