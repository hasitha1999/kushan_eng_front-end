import {useEffect,useState} from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { packageActive } from '../../use-cases/package-activate';
import { getPackageUser } from "../../use-cases/get-package-user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TableToCard = (props) => {
  const [open, setOpen] = useState(false);
  const [packageId,setPackageId] = useState();
  const [disabledPack, isDisabledPack] = useState();
  const [packageUser, setPackageUser] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const save = () =>{
    setOpen(false); 
    setPackageId(props.id)
  }
  useEffect(() => {
    if(packageId>0 ){
      packageActive(packageId);
    }
  }, [packageId]);

  useEffect(() => {
    if (packageUser.id == props.id) {
      isDisabledPack(true);
    } else {
      isDisabledPack(false);
    }
  }, [packageUser]);

    useEffect(() => {
      getPackageUser()
        .then((res) => setPackageUser(res.data.activePackage)); 
    }, []); 
    
  return (
    <div>
      <Card
        sx={{
          m: 1,
          borderRadius: 3,
          border: "1px solid #f2e22c",
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={`img/${props.imgname}`}
              sx={{
                height: 50,
                mr: 1,
                width: 50,
              }}
            />
            <Box sx={{ ml: "3" }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ mr: 2 }}
                color="secondary"
              >
                {props.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ mr: 2 }}
                color="secondary"
              >
                {props.package} USDT
              </Typography>
              <Typography gutterBottom variant="body1">
                5 x Revenue
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", mr: 3, m: 2 }}>
          <Typography color="subtiltle1" variant="body2">
            Daily Revenue : {props.package * 0.01} USDT
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ marginLeft: "auto", order: "2", border: "1px solid #fff" }}
            disabled={disabledPack}
          >
            Join
          </Button>
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            1. Subscribe Browns 1 Package selling price is {props.package} USDT,
            the income is 5 times the income can earn {props.package * 5}USDT,
            you can receive 1 USDT per day. <br />
            2. The daily earnings are put in the equivalent value of USDT coins.{" "}
            <br />
            3. You can upgrade to any higher package at any time while still in
            the purchased package <br />
            4. Once this package is sold, it is non-refundable and
            non- exchangeable.
            <br />
          </Typography>
          <Button
            onClick={save}
            variant="contained"
            sx={{ margin: "10", order: "2", border: "1px solid #fff" }}
          >
            Join
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ marginLeft: "auto", order: "2", border: "1px solid #fff" }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TableToCard