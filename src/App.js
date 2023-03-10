import './App.css';

import ModeToggle from './ModeToggle';

import { AspectRatio, CssVarsProvider, FormControl, FormLabel, Input, Link, Sheet, Switch, Typography } from '@mui/joy';
import Button from '@mui/joy/Button';

const App = () => {
  return(
    <CssVarsProvider>
      <ModeToggle/>
      
      <AspectRatio sx={{width:500}}>
        <Typography level="h2" component="div">
          16/9
        </Typography>
      </AspectRatio>
      
      <div>  
        <Sheet
          sx={{
            width: 350,
            px: 3,
            py: 3,
            borderRadius: 'sm',
            boxShadow: 'md'
          }}
        >
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input 
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password:</FormLabel>
            <Input 
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button sx={{ mt: 1 }}>
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center'}}
          >
            Don't have an account?
          </Typography>
          <Switch/>
        </Sheet>
      </div>
    </CssVarsProvider>
  )
}

export default App;