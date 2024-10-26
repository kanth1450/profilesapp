import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const currentConfig = Amplify.getConfig(); 
Amplify.configure({
  ...currentConfig,
  API: {
    REST: {
      [outputs.custom.api_name]: {
        endpoint: outputs.custom.api_endpoint,
        region: "us-east-1",
      },
    },
  },
});