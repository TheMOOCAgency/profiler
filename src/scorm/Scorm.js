import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    let lmsConnected = SCORM.init();
    if (lmsConnected) {
      // SET CMI.EXIT TO SUSPEND PREVENTS DATA RESET
      // SCORM.set("cmi.exit", "suspend");
      SCORM.get("cmi.entry");
      SCORM.set("cmi.completion_status", "incomplete");
      // SCORM.set("cmi.core.lesson_status", "incomplete");
      SCORM.set("cmi.success_status", "failed");
      // SCORM.set("cmi.objectives.n.success_status", "failed");
    }
  },
  getSuspendData() {
    SCORM.get("cmi.suspend_data");
  },

  setSuspendData(data) {
    SCORM.set("cmi.suspend_data", data);
    SCORM.save();
  }
};

export default Scorm;
