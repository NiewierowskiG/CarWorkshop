import * as React from 'react';

interface Props {
  error: string[]
}
interface State {

}

class ErrorValidate extends React.Component<Props, State> {
    constructor(props: Props)
    {
        super(props);
    }
  render() {
        return (
          <div>
              {this.props.error.map(err => (
                  <p>{err}</p>
              ))}
          </div>
      );
  }
};


export default ErrorValidate;