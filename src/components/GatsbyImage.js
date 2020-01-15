import React from 'react';
import Img from 'gatsby-image';
import { client } from '../utils/sanityClient';
import imageUrlBuilder from '@sanity/image-url';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
    return builder.image(source);
}



const GatsbyImage = ({ alt, asset: { _ref, _id: imageAssetId }, imagesData }) => {
    let fluidProps = null;
    if (imagesData) {
        imagesData.filter(data => {
            if (data.id === imageAssetId) {
                fluidProps = data.fluid;
            }
            return false;
        });

    }
    if (_ref && !fluidProps) {
        return <img src={urlFor(_ref).url()} alt={alt} />;
    }
    return <Img alt={alt} fluid={fluidProps} />;
};

export default GatsbyImage;
