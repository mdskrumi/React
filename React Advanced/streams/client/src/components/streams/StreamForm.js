import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderInput({ input, label, meta }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {(meta.touched && meta.error)
                    ? <p style={{ color: 'red', border: '1px solid red', padding: '5px', margin: '2px' }}>{meta.error}</p>
                    : null
                }

            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <Form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}  >
                <Field name="title" component={this.renderInput} label={"Enter Title: "} />
                <Field name="description" component={this.renderInput} label={"Enter Description: "} />
                <button className="ui button primary" > Submit </button>
            </Form>
        )
    }
}

const validate = formValues => {
    const error = {};
    if (!formValues.title) {
        error.title = "You must enter a title";
    }
    if (!formValues.description) {
        error.description = "You must enter a description";
    }
    return error;
}


export default reduxForm({
    form: 'streamForm',
    validate,
})(StreamForm);

