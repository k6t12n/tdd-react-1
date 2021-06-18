import React, {useEffect, useState} from 'react'

const AddNewUserForm = ({onCheckSubmit}) => {

    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')

    const [alertInput, setAlertInput] = useState({
        firstname: false,
        lastname: false,
        email: false
    })

    const [submitStatus, setSubmitStatus] = useState(null)

    const onValidateInput = () => {
        setAlertInput({
            firstname: firstname === '',
            lastname: lastname === '',
            email: email === ''
        })
    }

    const onHandleSubmit = () => {
        
        if (firstname !== '' && lastname !== '' && email !== '') {

            if (onCheckSubmit) {
                onCheckSubmit()
            }
    
            // action here
            fetch(
                '/this/is/mock/post',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: firstname,
                        middlename: middlename,
                        lastname: lastname,
                        email: email
                    })
                }
            )
                .then(res => res.json())
                .then(res => {

                    setSubmitStatus(res.status)
                })
                .catch(err => {
                    // console.log('err: ', err);
                    setSubmitStatus(-1)
                })
            
        }

    }
    
    return (
        <form
            id='add_new_user_form'
        >
            <div className="form-group">
                <div className="form-label">Firstname</div>
                <input
                    aria-label='firstname'
                    type="text"
                    className="form-input"
                    name='firstname'
                    required
                    value={firstname}
                    onChange={e => {
                        setFirstname(e.target.value)
                    }}
                />
                {
                    alertInput.firstname ? <span aria-label='required-alert-firstname' className='text-error'>Please fill firstname</span> : null
                }
            </div>
            <div className="form-group">
                <div className="form-label">Middlename</div>
                <input
                    aria-label='middlename'
                    type="text"
                    className="form-input"
                    name='middlename'
                    value={middlename}
                    onChange={e => {
                        setMiddlename(e.target.value)
                    }}
                />
            </div>
            <div className="form-group">
                <div className="form-label">Lastname</div>
                <input
                    aria-label='lastname'
                    type="text"
                    className="form-input"
                    name='lastname'
                    required
                    value={lastname}
                    onChange={e => {
                        setLastname(e.target.value)
                    }}
                />
                {
                    alertInput.lastname ? <span aria-label='required-alert-lastname' className='text-error'>Please fill lastname</span> : null
                }
            </div>
            <div className="form-group">
                <div className="form-label">Email</div>
                <input
                    aria-label='email'
                    type="email"
                    className="form-input"
                    name='email'
                    required
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                />
                {
                    alertInput.email ? <span aria-label='required-alert-email' className='text-error'>Please fill email</span> : null
                }
            </div>
            <br />
            <div className="form-group">
                <button
                    aria-label='submit'
                    className='btn'
                    type='button'
                    name='submit'
                    onClick={e => {
                        e.preventDefault()
                        onValidateInput()
                        onHandleSubmit()
                    }}
                >
                    Submit
                </button>
            </div>
            <div className="form-group">
                {
                    submitStatus === 200 ?
                    <div className="toast toast-primary">
                        Add new user successfully
                    </div> : null
                }

                {
                    submitStatus === 400 ?
                    <div className="toast toast-primary">
                        Add new user failed - Bad Request
                    </div> : null
                }

                {
                    submitStatus === 401 ?
                    <div className="toast toast-primary">
                        Add new user failed - Unauthorized
                    </div> : null
                }

                {
                    submitStatus === 500 ?
                    <div className="toast toast-primary">
                        Add new user failed - Internal Server Error
                    </div> : null
                }

                {
                    submitStatus === -1 ? // on catch error
                    <div className="toast toast-primary">
                        Add new user failed - Error, try again later
                    </div> : null
                }
                
            </div>
        </form>
    );
};

export default AddNewUserForm;
