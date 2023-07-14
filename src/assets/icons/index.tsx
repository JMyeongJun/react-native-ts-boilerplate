import React from 'react';
import { SvgProps } from 'react-native-svg';

import AddCircle from './add-circle.svg';
import Layers from './layers.svg';
import Lock from './lock.svg';
import Unlock from './lock-unlocked.svg';
import Menu from './menu-dots.svg';
import MinusCircle from './minus-circle.svg';
import Bell from './bell.svg';
import Cart from './cart.svg';
import Clipboard from './clipboard.svg';
import Home from './home.svg';
import Pallete from './pallete.svg';

/**
 *  free svg icons from https://www.svgrepo.com/
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
  Cart: (props: IconProps) => createIcon(props, Cart),
  Clipboard: (props: IconProps) => createIcon(props, Clipboard),
  Home: (props: IconProps) => createIcon(props, Home),
  Pallete: (props: IconProps) => createIcon(props, Pallete),
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
