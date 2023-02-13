import React from 'react';

/**
 * ? Local Imports
 */
import * as s from './Tab2Style';

interface Tab2Props {}

const Tab2Presenter: React.FC<Tab2Props> = (props) => {
  return (
    <s.Container>
      <s.Text>Tab2</s.Text>
    </s.Container>
  );
};

export default Tab2Presenter;
