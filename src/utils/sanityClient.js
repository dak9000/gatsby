const TOKEN = 'skt3MPKXXmUTjqussyrUDUvAEe5DLbV33bkq87eeWIlGuhtmSzI40546gxSAUSLbvU7NkwFxCY3maaFm61ibHYNlO6OnpO4Jt2cikQ9VRsyDIxa5mJ8LSr00DWsyPpuiFqy5khxzuqZpDypf2OnlEz1bhrNq9rCuxoGe4xFUIi6StlcDKUWr';
const DATABASE_NAME = 'production';
const PROJECT_ID = '7bn5qffm';

const sanityClient = require('@sanity/client');

export const client = sanityClient({
    projectId: PROJECT_ID,
    dataset: DATABASE_NAME,
    token: TOKEN, // or leave blank to be anonymous user
    useCdn: true // `false` if you want to ensure fresh data
});
