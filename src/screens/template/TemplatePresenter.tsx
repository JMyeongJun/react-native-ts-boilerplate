import React from 'react';

/**
 * ? Local Imports
 */
import * as s from './TemplateStyle';

interface TemplateProps {
  text: string;
}

const TemplatePresenter: React.FC<TemplateProps> = (props) => {
  return (
    <s.Container>
      <s.Text>{props.text}</s.Text>
    </s.Container>
  );
};

export default TemplatePresenter;
