import * as React from 'react';
import ErrorValidate from "../ErrorValidate/ErrorValidate";

interface ValueValidatorProps {
    value: string | number;
    validationFunction: (value: string | number) => boolean;
    errorMessage: string;
}


class ValueValidator extends React.Component<ValueValidatorProps> {
    render() {
        const {value, validationFunction, errorMessage} = this.props;
        if (validationFunction(value)) {
            return <ErrorValidate error={[errorMessage]}/>
        }
        return null;
    }
}

export default ValueValidator;