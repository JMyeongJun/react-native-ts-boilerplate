import React from 'react';

/**
 * ? Local Imports
 */
import * as s from './Tab1Style';

interface Tab1Props {}

const Tab1Presenter: React.FC<Tab1Props> = (props) => {
  return (
    <s.Container>
      <s.Text>Tab1</s.Text>
    </s.Container>
  );
};

export default Tab1Presenter;
