import React from 'react';

import { View, Flex, Badge, Text, Button } from '@aws-amplify/ui-react';
import { useState } from 'react';
import styles from './GlobalNav.module.scss';
import { NavMenuIconType } from './components/icons/IconLink';
import { AmplifyLogo } from './components/icons';
import { RightNavLinks } from './components/RightNavLinks';
import { AmplifyNavLink } from './components/AmplifyNavLink';
import { LeftNavLinks } from './components/LeftNavLinks';
import Link from 'next/link';

export enum NavMenuItemType {
  DEFAULT = 'DEFAULT',
  EXTERNAL = 'EXTERNAL',
  ICON = 'ICON'
}

export interface NavMenuItem {
  type: NavMenuItemType;
  label: string;
  url: string;
  order: number;
  icon?: NavMenuIconType | string;
}

export interface NavProps {
  leftLinks: NavMenuItem[];
  rightLinks: NavMenuItem[];
  socialLinks?: NavMenuItem[];
  currentSite: string;
  isGen2?: boolean;
}

export function GlobalNav({
  currentSite,
  leftLinks,
  rightLinks,
  socialLinks,
  isGen2
}: NavProps) {
  const themeableSites: any = {
    'UI Library': true
  };

  // This class will be added onto the sites that aren't using an Amplify UI theme provider, this will let those using a ThemeProvider use the variables
  // provided and the sites not using a ThemeProvider will have the needed variables added on
  const themeClass = themeableSites[currentSite] ? '' : 'use-ui-theme';

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View
      as="nav"
      className={`${styles['navbar']} ${isGen2 ? styles['navbar--gen2'] : ''} ${
        themeClass ? styles[themeClass] : ''
      }`}
      aria-label="Amplify Dev Center - External links to additional Amplify resources"
    >
      <Flex className={styles['nav-links-container']}>
        <Flex height="100%" id="left-nav" className={styles['left-nav-links']}>
          <AmplifyNavLink
            currentSite={currentSite}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isGen2={isGen2}
          />

          {isGen2 ? null : (
            <LeftNavLinks
              isCollapsed={isCollapsed}
              leftLinks={leftLinks}
              currentSite={currentSite}
            />
          )}
        </Flex>
        <RightNavLinks
          rightLinks={rightLinks}
          socialLinks={socialLinks}
          currentSite={currentSite}
          isCollapsed={isCollapsed}
        />
      </Flex>
      <View
        className={isCollapsed ? '' : styles['background-overlay']}
        onClick={() => {
          setIsCollapsed(true);
        }}
      ></View>
    </View>
  );
}
