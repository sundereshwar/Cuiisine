const auth =  window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
    function login() {
        auth.signInWithPopup(provider);
    }

    return{login};
}