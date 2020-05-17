import React from 'react';
import Box from '@material-ui/core/Box';
import { TypographyCustom } from './styles';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <TypographyCustom
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </TypographyCustom>
  );
};

export default TabPanel;
