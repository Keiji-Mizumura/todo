import { Button, CssVarsProvider, useColorScheme } from "@mui/joy";

import { useState } from 'react';
import React from 'react';

const ModeToggle = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    React.useEffect(()=>{
        setMounted(true);
    }, []);
    if(!mounted){
        return null;
    }
    return(
        <Button
            variant="outlined"
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}    
        </Button>
    );
}

export default ModeToggle;