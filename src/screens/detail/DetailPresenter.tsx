import React from 'react';

/**
 * ? Local Imports
 */
import * as s from './DetailStyle';

interface DetailProps {}

const DetailPresenter: React.FC<DetailProps> = (props) => {
  return (
    <s.Container>
      <s.Text>Detail</s.Text>
    </s.Container>
  );
};

export default DetailPresenter;
