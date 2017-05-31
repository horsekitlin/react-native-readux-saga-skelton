import constants from 'flux-constants';

// constants plugin will return object in this format: { ROUTE_CHANGE: "ROUTE_CHANGE" }
// so I don't have to type out duped strings
export default constants([
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
]);
