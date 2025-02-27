import React from "react";
import { TextField, Button } from "@mui/material";

const PrivateNotesForm = () => {
  return (
    <div>
      <TextField fullWidth label="Notes" multiline rows={4} variant="outlined" />
      <Button variant="contained" color="primary" className="w-full !mt-4">
        Save
      </Button>
    </div>
  );
};

export default PrivateNotesForm;
