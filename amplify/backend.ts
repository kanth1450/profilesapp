/*import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
/*defineBackend({
  auth,
  data,
});*/
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const backend = defineBackend({
  auth, 
  data, 
});

backend.addOutput({
  custom: {
    api_id: "restAPIId",
    api_endpoint: "https://api.example.com",
    api_name: "restApiName",
  },
});
