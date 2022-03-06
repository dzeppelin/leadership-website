### leadership-website

That's a project for a leadership course. The task is to create something useful for an aspect you are consered in the current society.

The stack:

- The backend
  For the backend we have used strapi, and defined post and author models.
  The benefit of using strapi is that it already provides you with the UI for
  editing and creating articles.
- The frontend
  The frontend was setup with Vite. Code style enforcing and formatting tools were not implemented, as well as pre-commit hooks such as husky are missing too.
- Deployment
  Has been decided by me to deploy frontend on the cloudflare to take advantage of easy to use CI/CD.
  And the backend has been deployed on a VPS behind caddy proxy.
