import React from 'react';
import PropTypes from 'prop-types';
import BackIcon from './icons/BackIcon';

import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    marginTop: 10,
    marginRight: 10
  }
});

const ComeBack = ({label, onClick}) => {
  const classes = useStyles();
  const handleClick = () => onClick && onClick();

  return (
    <Box display='flex' onClick={handleClick}>
      <BackIcon color='primary'className={classes.icon}/>
      <Typography variant='subtitle1' ml={10}>{label}</Typography>
    </Box>
  );
};

ComeBack.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ComeBack.defaultProps = {
  label: 'Volver'
};

export default ComeBack;