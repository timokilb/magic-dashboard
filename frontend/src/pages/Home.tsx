import Button from '../components/controls/Button'
import { useNavigate } from "react-router";

function Home() {
    let navigate = useNavigate();

    const navigateToEditor = () => {

        navigate("/editor");

    }

  return (
    <>
      <div>
        <Button onClick={navigateToEditor}/>
      </div>
      <div>Hello to Magic Dashboard</div>
      
    </>
  )
}

export default Home