import React from 'react';
import { Divider } from '../styles/primitives';
import { Container, Column } from '../styles/containers';
import Wysiwyg from '../components/Wysiwyg';
import GatsbyImage from '../components/GatsbyImage';
import Button from '../components/Button';

const components = {
    divider: Divider,
    row: Container,
    column: Column,
    wysiwyg: Wysiwyg,
    gatsbyImage: GatsbyImage,
    button: Button,
};

let length;
let imagesData;

export const renderFlexibleContent = (sections, images = null) => {
    if (images !== null) imagesData = images;
    return sections.map((section, i) => {
        if (section._type === 'row' && section.fields) {
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

        let props = section._type === 'column' ? { ...section, length } : { ...section };
        if (section._type === 'column') {
            props = { ...section, length };
        } else if (section._type === 'gatsbyImage') {
            props = { ...section, imagesData };
        } else {
            props = { ...section };
        }
        return (
            <Component {...props} key={i}>
                {children}
            </Component>
        );
    });
};
