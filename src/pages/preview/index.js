import * as queryString from 'query-string';
import React from 'react';
import { fetchDataFromSanity, subscribeToData } from '../../utils/fetchDataFromSanity';
import { renderFlexibleContent } from '../../utils/renderFlexibleContent';
import Layout from '../../components/layout';

class PageTemplate extends React.Component {
    state = {
        isLoading: true,
        data: undefined,
    };

    fetchData = async () => {
        const query = queryString.parse(this.props.location.search);
        const { pageId, isDraft } = query;
        const sanityData = await fetchDataFromSanity(pageId, isDraft);
        this.setData(sanityData);
    };

    setData = data => {
        if (data) {
            this.setState({
                isLoading: false,
                data: data,
            });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    };

    componentDidMount() {
        const query = queryString.parse(this.props.location.search);
        const { pageId, isDraft } = query;
        this.fetchData();
        if (isDraft) {
            // the subscribeToData helper function runs sanity-client's listen
            // method to create an observable that runs a callback function
            // every time the data is changed (in this case, this.fetchData)
            subscribeToData(pageId, this.setData);
        }
    }

    render() {
        const { data, isLoading } = this.state;
        return (
            <Layout>
                {!isLoading && renderFlexibleContent(data.sections)}
            </Layout>
        );

    }
};
export default PageTemplate;
