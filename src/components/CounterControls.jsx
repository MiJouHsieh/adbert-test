
 import { ButtonGroup } from "@mui/material";
 import { Button } from "@mui/material";
 import { useState } from "react";

 export function CounterControls() {
   const [count, setCount] = useState(0);
   const [isDisabled, setIsDisabled] = useState(false);

   const handleClickCount = () => {
     setCount((prev) => prev + 1);
   };
   const handleClickClear = () => {
     setCount(0);
   };

   const handleSwitchDisabled = () => {
     setIsDisabled((prev) => !prev);
   };

   return (
     <ButtonGroup
       orientation="vertical"
       variant="outlined"
       aria-label="Vertical button group"
     >
       <Button disabled={isDisabled} onClick={handleClickCount}>
         CLICK: {count}
       </Button>
       <Button onClick={handleClickClear}>CLEAR</Button>
       <Button onClick={handleSwitchDisabled}>
         {isDisabled ? "ABLE" : "DISABLE"}
       </Button>
     </ButtonGroup>
   );
 }