import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    borderWidth: ({variant}) => variant === 'outlined' ? 2 : undefined,
    borderColor: ({color}) => color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
    width: ({wide}) => wide ? 250 : 100,
  }
}));

const ButtonLIB = ({label, wide, variant, color, onClick}) => {
  const classes = useStyles({variant, wide, color});
  const handleClick = () => onClick && onClick();

  return (
    <Button variant={variant} color={color} onClick={handleClick} className={classes.button}>{label}</Button>
  );
};

ButtonLIB.propTypes = {
  label: PropTypes.string,
  wide: PropTypes.bool,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func.isRequired,
};

ButtonLIB.defaultProps = {
  wide: false,
  variant: 'contained',
  color: 'primary'
};

export default ButtonLIB;