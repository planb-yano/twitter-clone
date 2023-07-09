import React from "react";
import ModalLayout from "../templates/ModalLayout";
import Icon from "../atom/Icon";
import Heading from "../atom/Heading";
import { css } from "@emotion/react";
import ButtonContainIcon from "../molecules/ButtonContainIcon ";

const Login = () => {
  return (
    <ModalLayout>
      <Icon src={"/2021 Twitter logo - blue.png"} width={40} height={40} />
      <Heading css={styles.heading}>Twitterにログイン</Heading>
      <ButtonContainIcon css={styles.button} />
    </ModalLayout>
  );
};

const styles = {
  heading: css`
    margin: 20px 0;
    font-size: 26px;
  `,
  button: css`
    padding: 8px 60px;
    font-weight: bold;
  `
};

export default Login;
