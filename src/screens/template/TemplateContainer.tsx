import React, { useEffect } from 'react';
import TemplatePresenter from './TemplatePresenter';

const TemplateContainer = ({ navigation }: any) => {
  const text = 'Template';
  return <TemplatePresenter text={text} />;
};

export default TemplateContainer;
