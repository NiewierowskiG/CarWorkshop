import * as React from 'react';
import './ErrorValidate.module.css'


interface Props {
  error: string[]
}
interface State {

}

class ErrorValidate extends React.Component<Props, State> {
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