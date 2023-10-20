import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import { BillOutline, PieOutline, UserOutline } from 'antd-mobile-icons';
import s from './style.module.less';

type Props = {
  showNav: boolean;
};

const NavBar = ({ showNav }: Props) => {
  const [activeKey, setActiveKey] = useState('/');
  const navigateTo = useNavigate();

  const changeTab = (path: string) => {
    setActiveKey(path);
    navigateTo(path);
  };

  return showNav ? (
    <TabBar className={s.tab} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item key="/" title="账单" icon={<BillOutline />} />
      <TabBar.Item key="/data" title="统计" icon={<PieOutline />} />
      <TabBar.Item key="/user" title="我的" icon={<UserOutline />} />
    </TabBar>
  ) : null;
};

export default NavBar;
