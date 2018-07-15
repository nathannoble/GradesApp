  const dev = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "gradesapi-dev-attachmentsbucket-qsnfhnb3l07e"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://823e3s4ng5.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_QoWdHPceu",
      APP_CLIENT_ID: "5brsd8p3a1ck7h7egnaocutntv",
      IDENTITY_POOL_ID: "us-east-1:13c70687-a92f-4b4b-b614-30fd8f4b6477"
    },
    STRIPE_KEY: "pk_test_xn1aKnM2gzJvoxgKo7lLr8yo"
  };
  

  const prod = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api.nibbleworx.com"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://hz4qwf2vqh.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_hEGx4QVTs",
      APP_CLIENT_ID: "238htte3maa7frpiqhqg40lqt7",
      IDENTITY_POOL_ID: "us-east-1:0072de11-8165-4ed5-98fc-b42bd749b717"
    },
    STRIPE_KEY: "pk_test_xn1aKnM2gzJvoxgKo7lLr8yo"
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };

  // $ REACT_APP_STAGE=prod npm run build