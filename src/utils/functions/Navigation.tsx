import { NavigateFunction } from "react-router-dom";

export const handleNavigation = (data: string, navigate: NavigateFunction) => {
  switch (data) {
    case "LAWYER": {
      navigate("/lawyer");
      break;
    }
    case "NON LAWYER": {
      navigate("/non-lawyer");
      break;
    }
    case "REGISTRAR 1": {
      navigate("/registrar-1");
      break;
    }
    case "REGISTRAR 2": {
      navigate("/registrar-2");
      break;
    }
    case "PRESIDING JUDGE": {
      navigate("/presiding-judge");
      break;
    }
    case "PRESIDING MAGISTRATE": {
      navigate("/presiding-magistrate");
      break;
    }
    case "JUDGE": {
      navigate("/judge");
      break;
    }
    case "MAGISTRATE": {
      navigate("/magistrate");
      break;
    }
    case "BAILIFF": {
      navigate("/bailiff");
      break;
    }
    default: {
      break;
    }
  }
};
