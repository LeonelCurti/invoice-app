import React from "react";
import { Box, Card, Button, Typography } from "@mui/material";
import { upperCaseFirstLetter } from "../../utils";
import { styled } from "@mui/material/styles";
import { ChipStyle } from "../../components/ChipStyle";
const ButtonStyle = styled(Button)(() => ({
  textTransform: "none",
  borderRadius: "20px",
  fontSize: { xs: 16, sm: 15 },
  "& .MuiSvgIcon-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "primary.main",
  },
}));

const ActionsMenu = () => {
  return (
    <Card
      sx={{
        display: {xs:'block', sm:'flex'},
        borderRadius: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: 2,
        paddingX: 4,
      }}
    >
      <Box
        sx={{
          display:'flex',       
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            marginRight: 2,
          }}
        >
          Status
        </Typography>
        <ChipStyle
          label={upperCaseFirstLetter("Pending")}
          variant="outlined"
          className={"pending"}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiButton-root": {
            marginX: 1,
          },
        }}
      >
        <ButtonStyle
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "rgba(213, 213, 213, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(213, 213, 213, 0.1)",
            },
          }}
        >
          Edit
        </ButtonStyle>
        <ButtonStyle variant="contained" color="error" disableElevation>
          Delete
        </ButtonStyle>
        <ButtonStyle variant="contained" color="primary" disableElevation>
          Mark as Paid
        </ButtonStyle>
      </Box>
    </Card>
  );
};

export default ActionsMenu;
