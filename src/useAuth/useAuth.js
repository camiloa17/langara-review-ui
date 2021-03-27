import { useState, useEffect } from 'react';

function useAuth() {
  const [user, setUser] = useState(false);
  
  useEffect(() => {
    setUser(window.localStorage.getItem('logedin'));
  }, []);

  const signin = () => {
    window.localStorage.setItem('logedin', true);
    setUser(true);
  };

  const signout = () => {
    window.localStorage.removeItem('logedin');
    setUser(false);
  };

  return { user, signin, signout };
}
export default useAuth;
