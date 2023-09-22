import { Box, Card, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function App() {
  const navigate = useNavigate();
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
    const data = new FormData(event.currentTarget);
    const category = data.get("categories");
    navigate(`/${category}`);
  };
  return (
    <>
      <motion.h1
        initial={{ y: "-1000" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
      >
        Lets play Hangman!
      </motion.h1>
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="start-btn"
                  type="submit"
                >
                  Start Game
                </motion.button>
              </form>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </>
  );
}

export default App;
