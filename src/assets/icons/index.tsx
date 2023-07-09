import React from 'react';
import { SvgProps } from 'react-native-svg';

import AddCircle from './add-circle-svgrepo-com.svg';
import Layers from './layers-svgrepo-com.svg';
import Lock from './lock-keyhole-svgrepo-com.svg';
import Unlock from './lock-keyhole-unlocked-svgrepo-com.svg';
import Menu from './menu-dots-svgrepo-com.svg';
import MinusCircle from './minus-circle-svgrepo-com.svg';
import Bell from './bell-svgrepo-com.svg';

/**
 *  free svg icons from https://www.svgrepo.com/
 *  used collection : solar-linear-icons
 */

interface IconProps extends SvgProps {
  size?: number;
}

const Icon = {
  AddCircle: (props: IconProps) => createIcon(props, AddCircle),
  Layers: (props: IconProps) => createIcon(props, Layers),
  Lock: (props: IconProps) => createIcon(props, Lock),
  Unlock: (props: IconProps) => createIcon(props, Unlock),
  Menu: (props: IconProps) => createIcon(props, Menu),
  MinusCircle: (props: IconProps) => createIcon(props, MinusCircle),
  Bell: (props: IconProps) => createIcon(props, Bell),
};

const createIcon: React.FC = (props: IconProps, Svg: React.FC<SvgProps>) => {
  return (
    <Svg
      width={props.size ? props.size : 25}
      height={props.size ? props.size : 25}
      color={props.color ? props.color : '#000'}
      {...props}
    />
  );
};

export default Icon;
