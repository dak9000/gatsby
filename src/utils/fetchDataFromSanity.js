import { client } from "./sanityClient";
const query = `*[_id == $pageId]`;

export const fetchDataFromSanity = (pageId, isDraft) => {

    const params = { pageId: isDraft ? `drafts.${pageId}` : pageId };

    return client.fetch(query, params).then(data => data[ 0 ].section);
};

export const subscribeToData = (pageId, setData) => {
    const params = { pageId: `drafts.${pageId}` };
    client.listen(query, params).subscribe((data) => setData(data.result.section));
};
