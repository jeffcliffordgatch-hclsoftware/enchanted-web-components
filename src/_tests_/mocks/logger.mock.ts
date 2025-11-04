// eslint-why: Allow empty functions for logger mock methods used in tests
/* eslint-disable no-empty-function */
/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */

// mock @enchanted-prod/logger for tests
const loggerFactory = () => {return {
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
};};

export default loggerFactory;
