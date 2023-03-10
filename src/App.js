import "./App.css";

import { CssVarsProvider, Input, Typography, Checkbox, Card } from "@mui/joy";
import { padding, Stack } from "@mui/system";

import { useState } from "react";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const enterButton = (e) => {
    if (e.key === "Enter") {
      const tempArray = todoList.slice();
      tempArray.push(todoText);
      setTodoList(tempArray);
      setTodoText("");
    }
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <CssVarsProvider>
      <Stack
        sx={{
          height: 300,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundImage: "url('https://raw.githubusercontent.com/Keiji-Mizumura/image/main/background.jpg')",
        }}
      ></Stack>

      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          top: 70,
        }}
      >
        <Stack
          sx={{
            width: 540,
            height: 500,
          }}
        >
          <Typography
            level="h1"
            textColor="neutral.100"
            sx={{
              fontSize: 40,
              fontFamily: "'Josefin Sans', sans-serif",
              letterSpacing: 15,
            }}
          >
            TODO
          </Typography>
          <Input
            onChange={handleChange}
            onKeyUp={enterButton}
            value={todoText}
            sx={{
              mt: 4,
              padding: 0,
              height: 64,
              borderRadius: 5,
              fontFamily: "'Josefin Sans', sans-serif",
            }}
            startDecorator={
              <Checkbox
                sx={{
                  ml: "24px",
                  mr: "12px",
                }}
              />
            }
            placeholder="Create a new todo..."
          />

          <Stack
            sx={{
              mt: "24px",
              flexDirection: "column",
            }}
          >
            {todoList.map((x) => (
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 5,
                  height: 32,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ mr: "24px" }} />
              <Typography
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  color: "#494C6B",
                }}
                level="p"
              >
                {x}
              </Typography>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </CssVarsProvider>
  );
};

export default App;
