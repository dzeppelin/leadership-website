module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9d2e8b4b86860aad4b72c6ca615f1bd4'),
  },
});
