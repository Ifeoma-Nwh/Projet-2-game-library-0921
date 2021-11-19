import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingApp() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      style={{
        width: '95%',
        position: 'absolute',
        top: '50%',
        left: '2.5%',
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        color="inherit"
        sx={{ height: '20px' }}
      />
    </Box>
  );
}
