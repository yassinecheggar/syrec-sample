import { AnnouncementIcon, HomeLineIcon } from '@/assets/icons';
import { CustomMenuItem } from '@/components/layout/style';
import { MenuItem, MenuItemProps } from '@/types/theme';
import { Badge, MenuProps } from 'antd';

import React from 'react'
import { useNavigate } from 'react-router';

 export const useLayout =()=> {
  const navigate = useNavigate();

    const getItem =(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[]
      ): MenuItem => {
        return {
          key,
          icon,
          children,
          label,
        } as MenuItem;
      }

      const MenuItem: React.FC<MenuItemProps> = ({ label, count }) => (
        <CustomMenuItem>
          <p>{label}</p>
          <Badge count={ count} />
        </CustomMenuItem>
      );
      const items: MenuItem[] = [
        getItem("Dashboard", "Dashboard", <HomeLineIcon />),
        getItem("Réclamations", "claims", <AnnouncementIcon />, [
          getItem(<MenuItem label="Affecter" count={12} />, "Af"),
          getItem(<MenuItem label="Analyser" count={10} />, "an"),
          getItem(<MenuItem label="Compléter" count={42} />, "co"),
        ]),
      ];

      const onClick: MenuProps['onClick'] = (e) => {
        if(e){
          if(e.keyPath.length==0) navigate(e.keyPath[0])
          else navigate(e.keyPath[1],{state:{sreachType:e.keyPath[0]}})
        }
      };

  return {items ,onClick}
    
}

