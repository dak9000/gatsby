import React from 'react';
import { getColor } from '../utils';
import BlockContent from '@sanity/block-content-to-react';
import { AlignedContainer } from '../styles/containers';

const color = props => {
    const { mark } = props;
    const finalColor = getColor(mark);
    return (
        <span style={{ color: finalColor }}>
            {props.children}
        </span>
    );
};


const code = props => {
    const { node: { code } } = props;
    return (
        <div dangerouslySetInnerHTML={({ __html: code })} />
    );
};

const Wysiwyg = (props) => {
    return (
        <AlignedContainer align={props.align}>
            <BlockContent blocks={props.content} serializers={{ marks: { color }, types: { code } }} />
        </AlignedContainer>
    );
};

export default Wysiwyg;
