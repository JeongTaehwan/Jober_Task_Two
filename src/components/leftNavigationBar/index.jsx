import React, { useState } from "react";
import { Menu } from "antd";
import MENUS from "./menus";
import * as S from "./leftNavigator.style";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const LeftNavigationBar = () => {
  const [mark, setMark] = useState([false, false, false, false, false]);
  const [markedMenu, setMarkedMenu] = useState([]);

  const onHandleBookmark = (key) => {
    setMark((mark) => {
      mark[key] = !mark[key];
      return mark;
    });
    let newArr = mark.filter((item) => item === true);
    setMarkedMenu(newArr);
  };

  return (
    <S.Positioner>
      <Menu mode="vertical" theme="dark">
        {markedMenu ? (
          markedMenu?.reverse().map(({ key, label, icon }, index) => (
            <>
              <Menu.Item key={key} icon={icon}>
                {label}
                <StarFilled
                  className="bookmark"
                  onClick={() => {
                    onHandleBookmark(index);
                  }}
                />
              </Menu.Item>
            </>
          ))
        ) : (
          <></>
        )}
        <Menu.Divider />
        {MENUS.map(({ key, label, icon }, index) => (
          <>
            <Menu.Item key={key} icon={icon}>
              {label}
              {!mark ? (
                ""
              ) : (
                <StarOutlined
                  className="bookmark"
                  onClick={() => {
                    onHandleBookmark(index);
                  }}
                />
              )}
            </Menu.Item>
          </>
        ))}
      </Menu>
    </S.Positioner>
  );
};

export default LeftNavigationBar;
