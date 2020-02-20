import React from 'react'

const Code = props => {
    const { code } = props;
    return (
        <div dangerouslySetInnerHTML={({ __html: code })} />
    );
};

export default Code
