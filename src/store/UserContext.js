import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
    loggedin: false,
    uid: -1,
    username: '',
    admin: false,
    login: (uid, username, admin) => {},
    logout: () => {},
});

function UserContextProvider (props) {
    const [user, setUser] = useState({
        loggedin: ((sessionStorage.getItem('loggedin')??false)==='true'),
        uid: parseInt(sessionStorage.getItem('uid')??-1),
        username: sessionStorage.getItem('username')??'',
        admin: (sessionStorage.getItem('admin')??false)==='true',
    });

    useEffect(() => {
        sessionStorage.setItem('loggedin', user.loggedin);
        sessionStorage.setItem('uid', user.uid);
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('admin', user.admin);
    }, [user]);

    function loginHandler (_uid, _username, _admin) {
        setUser({
            loggedin: true,
            uid: _uid??-1,
            username: _username??'',
            admin: _admin??false,
        });
    }

    function logoutHandler () {
        setUser({
            loggedin: false,
            uid: -1,
            username: '',
            admin: false,
        })
    }

    const context = {
        loggedin: user.loggedin,
        uid: user.uid,
        username: user.username,
        admin: user.admin,
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
