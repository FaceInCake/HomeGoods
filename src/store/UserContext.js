import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
    loggedin: false,
    uid: -1,
    username: '',
    login: (uid, username) => {},
    logout: () => {},
});

function UserContextProvider (props) {
    const [user, setUser] = useState({
        loggedin: ((sessionStorage.getItem('loggedin')??false)==='true'),
        uid: parseInt(sessionStorage.getItem('uid')??-1),
        username: sessionStorage.getItem('username')??'',
    });

    useEffect(() => {
        sessionStorage.setItem('loggedin', user.loggedin);
        sessionStorage.setItem('uid', user.uid);
        sessionStorage.setItem('username', user.username);
    }, [user]);

    function loginHandler (_uid, _username) {
        setUser({
            loggedin: true,
            uid: _uid??-1,
            username: _username??'',
        });
    }

    function logoutHandler () {
        setUser({
            loggedin: false,
            uid: -1,
            username: '',
        })
    }

    const context = {
        loggedin: user.loggedin,
        uid: user.uid,
        username: user.username,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
