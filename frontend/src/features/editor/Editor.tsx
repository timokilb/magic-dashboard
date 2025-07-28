import { useNavigate } from "react-router";
import FileUpload from "../../components/controls/FileUpload"
import useFileStore from "../../stores/file-store";
import Button from "../../components/controls/Button";
import Table from "./components/Table";


function Editor() {

  const store = useFileStore()

  const onClick = () => {

    console.log("store: ", store.file)
  }

  const onClickTwo = () => {

    store.duplicateLastRow()
  }

  return (
    <>
      <div>Here you can edit your stuff</div>

      <FileUpload />

      <Button onClick={onClick}>
        <div>Print store</div>
      </Button>
      <Button onClick={onClickTwo}>
        <div>Duplicate in deniz arsch rsch 2 </div>
      </Button>
      <Table/>
    </>
  )
}

export default Editor
