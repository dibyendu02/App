import React, {forwardRef} from 'react';
import BaseOptionsList from './BaseOptionsList';
import withWindowDimensions from '../withWindowDimensions';
import {propTypes, defaultProps} from './baseOptionsListPropTypes';

const OptionsList = forwardRef((props, ref) => (
    <BaseOptionsList
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={ref}

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        keyboardDismissMode={props.isSmallScreenWidth ? 'on-drag' : 'none'}
    />
));

OptionsList.propTypes = propTypes;
OptionsList.defaultProps = defaultProps;
OptionsList.displayName = 'OptionsList';

export default withWindowDimensions(OptionsList);
