import { SCREENS } from '@shared-constants';
import React from 'react';

/**
 * ? Local Imports
 */
import * as s from './HomeStyle';

interface HomeProps {
  navigation: any;
}

const HomePresenter: React.FC<HomeProps> = (props) => {
  return (
    <s.Container>
      <s.Text>Home</s.Text>
      <s.Btn onPress={() => props.navigation.navigate(SCREENS.DETAIL)}>
        <s.Text>go detail</s.Text>
      </s.Btn>
    </s.Container>
  );
};

export default HomePresenter;
