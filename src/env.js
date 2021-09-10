const hostUrl = process.env.HOST_URL || 'localhost';
const hostPort = (process.env.HOST_PORT || '5000') * 1;
const externalUrl =
  process.env.EXTRNAL_URL || 'http://' + hostUrl + ':' + hostPort;
const samlAudience = process.env.SAML_AUDIENCE || 'https://auth.boxyhq.com';

const internalUrl = process.env.HOST_URL || 'localhost';
const internalPort = (process.env.HOST_PORT || '6000') * 1;

const idpEnabled = process.env.IDP_ENABLED === 'true';

module.exports = {
  hostUrl,
  hostPort,
  externalUrl,
  samlAudience,
  internalUrl,
  internalPort,
  idpEnabled,
};
