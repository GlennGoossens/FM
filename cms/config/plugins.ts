export default () => ({
    "get-strapi-schema": {
        enabled: true
    },
    seo: {
        enabled: true,
    },
    navigation: {
        enabled: true,
        config: {
            contentTypes: ['api::page.page'],
            defaultContentTypes: 'api::page.page',
        }
    }
});
