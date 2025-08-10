/**
 * `populate-global` middleware
 */

import type { Core } from '@strapi/strapi';

const populateQuery = {
  populate: {
    "banner": {
      populate: {
        links: {
          fields: ["icon", "url"]
        }
      },
      fields: ["quote", "mail"]
    },
    "cta": {
      populate: true
    },
    "logo": {
      fields: ["url", "alternativeText", "name", "width", "height"]
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      ...populateQuery
    }

    await next();
  };
};
