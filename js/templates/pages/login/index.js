const template = `
<div class="registration__wrapper">
            <h1>thunDER BANK</h1>
            <div class="registration__form">

                <div class="transition">
                    <button type="submit" class="sign-up">Sing up</button>
                    <button type="submit" class="sign-in">Sing in</button>
                </div>
                <form action="">
                    <div>
                        <input type="text" name="email" id=""  placeholder="Email">
                        <span class="error"></span>
                    </div>

                    <div>
                        <input type="text" name="password" id=""  placeholder="Password">
                        <span class="error"></span>
                    </div>
                    <button class="register" type="submit">Sign in</button>
                </form>
                
            </div>
        </div>
`

export default template;