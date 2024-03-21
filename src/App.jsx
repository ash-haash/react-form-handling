
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import UseRefForm from './Components/useRefForm/UseRefForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sigh up data', data);
  }
  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }

  return (
    <>
      <h2>React Form Handling</h2>
      <br />
      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
      {/* <UseRefForm></UseRefForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <SimpleForm></SimpleForm> */}
    </>
  )
}

export default App
