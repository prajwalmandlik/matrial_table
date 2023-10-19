import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Edit } from "@mui/icons-material";

export default function EditRow(props) {
  const [open, setOpen] = React.useState(false);
  const { setRows, data } = props;

  const [newData, setNewData] = React.useState({
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });

  React.useEffect(() => {
    if (!data) return;
    setNewData({ ...data });
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = () => {
    setRows((prev) => {
      const index = prev.findIndex((x) => x.id === data.id);
      prev[index] = newData;
      return [...prev];
    });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        <Edit />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "2rem",
            zIndex: "1000",
            padding: "1rem",
          }}
        >
          <TextField
            label="name"
            value={newData?.name}
            onChange={(e) =>
              setNewData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextField
            label="calories"
            value={newData?.calories}
            onChange={(e) =>
              setNewData((prev) => ({ ...prev, calories: e.target.value }))
            }
          />
          <TextField
            label="fat"
            value={newData?.fat}
            onChange={(e) =>
              setNewData((prev) => ({ ...prev, fat: e.target.value }))
            }
          />
          <TextField
            label="carbs"
            value={newData?.carbs}
            onChange={(e) =>
              setNewData((prev) => ({ ...prev, carbs: e.target.value }))
            }
          />
          <TextField
            label="protein"
            value={newData?.protein}
            onChange={(e) =>
              setNewData((prev) => ({ ...prev, protein: e.target.value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
