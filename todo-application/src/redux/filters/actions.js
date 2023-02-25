import { COLCORCHANGED, STATUSCHANGED } from './actionTypes';

export const colorChanged = (color, changeType) => {
  return {
    type: COLCORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
