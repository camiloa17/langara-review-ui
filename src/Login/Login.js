import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Form, Button } from 'react-bootstrap';
import styles from './loginStyle.module.css';
import { Redirect } from 'react-router';

export default function Login() {
  const context = useContext(AuthContext);
  const onSubmitForm = (e) => {
    e.preventDefault();
    context.signin();
  };

  return !context.user ? (
    <div className={styles.CardContainer}>
      <div className={styles.CardLogin}>
        <h1>Log in</h1>
        <Form onSubmit={onSubmitForm}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Log in
          </Button>
        </Form>
      </div>
    </div>
  ) : (
    <Redirect to='/' />
  );
}
