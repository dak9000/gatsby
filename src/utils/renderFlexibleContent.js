import React from 'react';
import { Divider } from '../styles/primitives';
import { Container, Column } from '../styles/containers';
import Wysiwyg from '../components/Wysiwyg';
import GatsbyImage from '../components/GatsbyImage';

const components = {
    divider: Divider,
    row: Container,
    column: Column,
    wysiwyg: Wysiwyg,
    gatsbyImage: GatsbyImage,
};

let length;
export const renderFlexibleContent = (sections) => {
    return sections.map((section, i) => {
        if (section._type === 'row') {
            length = section.fields.sections.length;
        }
        if (!section._type) {
            console.warn('Warning: section missing _type field');
            return null;
        }
        // Note that this variable name (Component) MUST start with a capital
        // letter, or React will not understand what we're trying to do when
        // we try to render it using JSX further down (the return statement)
        const Component = components[ section._type ];
        if (!Component) {
            console.warn(
                `Warning: section specified an undefined component "${section._type}"`,
            );
            return null;
        }
        let children = null;

        if (section.fields) {
            children = section.fields ? renderFlexibleContent(section.fields.sections) : null;
        }

        // const children = section.fields.sections
        //   ? renderFlexibleContent(section.fields.sections)
        //   : null;

        const props = section._type === 'column' ? { ...section, length } : { ...section };
        return (
            <Component {...props} key={i}>
                {children}
            </Component>
        );
    });
};
