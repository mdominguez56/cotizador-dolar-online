import oficialDolar from "./api/oficialDolar";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <button onClick={oficialDolar}>Test api</button>
      <Stat>
        <StatLabel>test</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </div>
  );
}

export default App;
