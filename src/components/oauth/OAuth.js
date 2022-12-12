import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

const OAuth = () => {
    return(
        <div>
           <GoogleOAuthProvider clientId='337583218677-lc28k1240qlatd8099jv3cujb86j9uis.apps.googleusercontent.com'>
           <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
           </GoogleOAuthProvider>
           <button onClick={() => googleLogout()}>Logout From Google</button>
        </div>
    )
};

export default OAuth;
