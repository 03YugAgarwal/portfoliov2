import Navbar from "./Navbar"

const ErrorRoute = () => {
  return (
    <div>
      <Navbar />
        <h1 style={{textAlign: 'center', marginTop: '100px'}}>The Page Doesnt Exist</h1>
        <h2 style={{textAlign: 'center'}}>404 Error I Guess.</h2>
    </div>
  )
}

export default ErrorRoute