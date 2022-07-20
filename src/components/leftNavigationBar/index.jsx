import React, { useState } from "react";
import { Menu } from "antd";
import MENUS from "./menus";
import * as S from "./leftNavigator.style";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const LeftNavigationBar = () => {
  const [bookMark, setBookmark] = useState([]);

  const onHandleBookMark = (idx) => {
    setBookmark(!bookMark);
  };

  return (
    <S.Positioner>
      <Menu mode="vertical" theme="dark">
        <Menu.Divider />
        {MENUS.map(({ key, label, icon }) => (
          <>
            <Menu.Item key={key} icon={icon}>
              {label}
              <span onClick={onHandleBookMark(key)}>
                {bookMark ? (
                  <StarFilled className="bookmark" />
                ) : (
                  <StarOutlined className="bookmark" />
                )}
              </span>
            </Menu.Item>
          </>
        ))}
      </Menu>
    </S.Positioner>
  );
};

export default LeftNavigationBar;
