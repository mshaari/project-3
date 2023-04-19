import React from 'react';

function LoginForm() {
    return (
        <div>
            <div className='LoginForm'>
                <div id="login-signup-wrapper">
                    <div id="login-wrapper">
                        <h2>Login</h2>

                        <form class="form login-form">
                            <div class="form-group txt-field">
                                <label for="email-login">Email:</label>
                                <input class="form-input" type="text" id="email-login" />
                            </div>
                            <div class="form-group">
                                <label for="password-login">Password:</label>
                                <input class="form-input" type="password" id="password-login" />
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary submit" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                    <div id="signup-wrapper" class="col-md-6">
                        <h2>Signup</h2>

                        <form class="form signup-form">
                            <div class="form-group">
                                <label for="name-signup">Username:</label>
                                <input class="form-input" type="text" id="name-signup" />
                            </div>
                            <div class="form-group">
                                <label for="email-signup">Email:</label>
                                <input class="form-input" type="text" id="email-signup" />
                            </div>
                            <div class="form-group">
                                <label for="password-signup">Password:</label>
                                <input class="form-input" type="password" id="password-signup" />
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary submit" type="submit">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginForm;
