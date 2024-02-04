const { default: Terra } = require("terra-api");

const API_KEY = "O8sTDuQBXJfQDlULKMZrnOKlzzRNHMpi";
const DEV_ID = "ichack-testing-cgyBGcj290";
const SECRET = "4edcc0dfbabb6a58094bcdf64c51595d7161773fcd6a267b";

const terra = new Terra(DEV_ID, API_KEY, SECRET);

export default terra;

terra
  .generateWidgetSession({
    referenceID: userid,
    providers: ["CRONOMETER", "OURA"],
    authSuccessRedirectUrl: "success.com",
    authFailureRedirectUrl: "failure.com",
    language: "en",
  })
  .then((s) => {
    console.log(s);
  });
