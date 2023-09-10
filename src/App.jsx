import { Box } from "@mui/material";

function App() {
  return (
    <>
      <h1>Lets play Hangman!</h1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "50%" }}>
          <h2>Game</h2>
          <p>Game goes here</p>
        </Box>
        <Box sx={{ width: "50%" }}>
          <h2>Score</h2>
          <p>Score goes here</p>
        </Box>
      </Box>
    </>
  );
}

export default App;
