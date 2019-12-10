import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    console.log("before init");
    let lmsConnected = SCORM.init();
    console.log("after init");

    const tryScorm = () => {
      console.log("is connected");
    };

    if (lmsConnected) {
      tryScorm();
    } else {
      console.log("is not connected");
    }
  }
};

export default Scorm;
