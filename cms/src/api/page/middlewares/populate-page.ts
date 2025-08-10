/**
 * `populate-page` middleware
 */

import type { Core } from '@strapi/strapi';

const populateQuery = {
  populate: {
    blocks: {
      on: {
        "blocks.about": {
          populate: {
            serviceOffers: {
              populate: {
                image: {
                  fields: ["url", "alternativeText", "name", "width", "height"]
                },
                button: {
                  populate: true
                }
              },
              fields: ["title", "reverse", "content"]
            },
            classCards: {
              populate: {
                image: {
                  fields: ["url", "alternativeText", "name", "width", "height"]
                },
                button: {
                  populate: true
                }
              }
            },
            fields: ["title", "classCardsTitle"]
          }
        },
        "blocks.why-us": {
          populate: {
            fields: ["title", "featureTitle","content"],
            image: {
              fields: ["url", "alternativeText", "name", "width", "height"]
            },
            features: {
              populate: true
            }
          }
        },
        "blocks.testimonial": {
          populate: true
        },
        "blocks.section": {
          populate: true
        },
        "blocks.pricing": {
          populate: true
        },
        "blocks.hero": {
          populate: true
        },
        "blocks.header-banner": {
          populate: true
        },
        "blocks.gallery": {
          populate: true
        },
        "blocks.course": {
          populate: true
        },
        "blocks.contact": {
          populate: true
        }
      }
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
