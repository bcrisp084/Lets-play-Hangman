import { Box, Card, Container } from "@mui/material";

function App() {
  const categories = [
    "movies",
    "countries",
    "animals",
    "fruits",
    "programmingLanguages",
    "sports",
    "cars",
    "music",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    window.location.href = `/play`;
  };
  return (
    <>
      <h1>Lets play Hangman!</h1>
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              width: "500px",
              backgroundColor: "#415a77",
              color: "#fff",
              boxShadow: "10px 10px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="categories">Choose a category:</label>
              <select id="categories" name="categories">
                {categories.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <button className="start-btn" type="submit">
                Start Game
              </button>
            </form>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default App;
