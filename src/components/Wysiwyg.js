import React from 'react';
import { getColor } from '../utils';
import BlockContent from '@sanity/block-content-to-react';

const color = props => {
    const { mark } = props;
    const finalColor = getColor(mark);
    return (
        <span style={{ color: finalColor }}>
            {props.children}
        </span>
    );
};
const Wysiwyg = (props) => {
    return (
        <BlockContent blocks={props.content} serializers={{ marks: { color } }} />
    );
};

export default Wysiwyg;
