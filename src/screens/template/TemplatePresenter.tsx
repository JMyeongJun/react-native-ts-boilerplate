import React from 'react';

/**
 * ? Local Imports
 */
import * as s from './TemplateStyle';

interface TemplateProps {}

const TemplatePresenter: React.FC<TemplateProps> = (props) => {
  return (
    <s.Container>
      <s.Text>Template</s.Text>
    </s.Container>
  );
};

export default TemplatePresenter;
