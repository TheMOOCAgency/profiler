import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    console.log("before init");
    let lmsConnected = SCORM.init();
    console.log("after init");

    if (lmsConnected) {
      SCORM.set("cmi.completion_status", "incomplete");
      SCORM.set("cmi.core.lesson_status", "incomplete");
      SCORM.set("cmi.success_status", "failed");
      SCORM.set("cmi.objectives.n.success_status", "failed");
    }
  },
  getSuspendData() {
    return SCORM.get("cmi.suspend_data");
  },

  setSuspendData(data) {
    SCORM.set("cmi.suspend_data", data);
  }
};

export default Scorm;
