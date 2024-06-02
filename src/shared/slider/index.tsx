import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import * as React from "react";

function valueLabelFormat(value: number) {
  return `${value} day${value === 1 ? "" : "s"}`; // Display 'day' for singular and 'days' for plural
}

function calculateValue(value: number) {
  return value; // Since we're using days directly, no need for calculations
}

interface NonLinearSliderProps {
  duration: number;
  setDuration: (value: number) => void;
}

const NonLinearSlider: React.FC<NonLinearSliderProps> = ({
  duration,
  setDuration,
}: NonLinearSliderProps) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setDuration(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography
        className='flex justify-center items-center text-4xl text-darkblue font-medium'
        gutterBottom
        id='non-linear-slider'
        sx={{ fontSize: "3rem", fontWeight: 600 }}
      >
        {valueLabelFormat(duration)}
      </Typography>
      <Slider
        aria-labelledby='non-linear-slider'
        getAriaValueText={valueLabelFormat}
        max={30} // Maximum value set to 30 days
        min={1} // Minimum value set to 1 day
        onChange={handleChange}
        scale={calculateValue}
        step={1}
        value={duration}
        valueLabelDisplay='auto'
        valueLabelFormat={valueLabelFormat}
      />
    </Box>
  );
};

export default NonLinearSlider;
