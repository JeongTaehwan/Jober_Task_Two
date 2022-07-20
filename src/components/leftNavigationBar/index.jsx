import React, { useState } from "react";
import { Menu } from "antd";
import MENUS from "./menus";
import * as S from "./leftNavigator.style";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const LeftNavigationBar = () => {
  const [bookMark, setBookmark] = useState([false]);

  return (
    <S.Positioner>
      <Menu mode="vertical" theme="dark">
        <Menu.Divider />
        {MENUS.map(({ key, label, icon, bookMarkId }) => (
          <>
            <Menu.Item key={key} icon={icon}>
              {label}
              <span>
                {bookMark ? (
                  <StarFilled className="bookmark" key={bookMarkId} />
                ) : (
                  <StarOutlined className="bookmark" key={bookMarkId} />
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
