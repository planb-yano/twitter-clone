import React from "react";
import Icon from "../atom/Icon";
import MenuList from "../organisms/MenuList";
import PrimaryButton from "../atom/PrimaryButton";
import ProfileInfo from "./ProfileInfo";
import { css } from "@emotion/react";

const SideMenu = () => {
  return (
    <div css={styles.base}>
      <div css={styles.icon}>
        <Icon src={"/img/ico-twitter.png"} width={30} height={30} />
      </div>
      <MenuList />
      <div css={styles.button}>
        <PrimaryButton>Tweet</PrimaryButton>
      </div>
      <div css={styles.profile}>
        <ProfileInfo />
      </div>
    </div>
  );
};

const styles = {
  base: css`
    position: relative;
    height: 100%;
  `,
  icon: css`
    margin: 0 0 10px 23px;
  `,
  button: css`
    margin: 20px 0;
  `,
  profile: css`
    position: absolute;
    bottom: 0;
  `,
};

export default SideMenu;
