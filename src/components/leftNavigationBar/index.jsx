import React, { useState } from "react";
import { Menu } from "antd";
import MENUS from "./menus";
import * as S from "./leftNavigator.style";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const LeftNavigationBar = () => {
  const [bookMarkList, setBookMarkList] = useState([
    MENUS[0].marked,
    MENUS[1].marked,
    MENUS[2].marked,
    MENUS[3].marked,
    MENUS[4].marked,
  ]);
  const [markedMenu, setMarkedMenu] = useState([]);

  const onHandleBookmark = (key) => {
    setBookMarkList((bookMarkList) => {
      bookMarkList[key] = !bookMarkList[key];
      return bookMarkList;
    });
    let newArr = bookMarkList.filter((item) => item === true);
    setMarkedMenu(newArr);
  };

  return (
    <S.Positioner>
      <Menu mode="vertical" theme="dark">
        {markedMenu ? (
          markedMenu?.reverse().map(({ key }, index) => (
            <>
              <Menu.Item key={key} icon={MENUS[index].icon}>
                {MENUS[index].label}
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
              <StarOutlined
                className="bookmark"
                onClick={() => {
                  onHandleBookmark(index);
                }}
              />
            </Menu.Item>
          </>
        ))}
      </Menu>
    </S.Positioner>
  );
};

export default LeftNavigationBar;
