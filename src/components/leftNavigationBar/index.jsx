import React from "react";
import { Menu } from "antd";
import MENUS from "./menus";
import * as S from "./leftNavigator.style";
import { StarOutlined } from "@ant-design/icons";

const LeftNavigationBar = () => {
  const [active, setActive] = useState(false);

  return (
    <S.Positioner>
      <Menu defaultSelectedKeys={[MENUS[0].key]} mode="inline" theme="dark">
        {MENUS.map(({ key, label, icon, bookmark }) => (
          <>
            <Menu.Item key={key} icon={icon}>
              {label}
              <StarOutlined className="bookmark" />
            </Menu.Item>
          </>
        ))}
      </Menu>
    </S.Positioner>
  );
};

export default LeftNavigationBar;
