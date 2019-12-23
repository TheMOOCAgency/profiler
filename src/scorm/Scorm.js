import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    let lmsConnected = SCORM.init();
    if (lmsConnected) {
      // SCORM.set("cmi.entry", "resume");
      SCORM.set("cmi.core.lesson_status", "incomplete");
      // SCORM.set("cmi.success_status", "failed");
      // SCORM.set("cmi.objectives.0.completion_status", "incomplete");
      // SCORM.set("cmi.objectives.0.success_status", "failed");
      SCORM.get("cmi.core.entry");
      SCORM.get("cmi.core.lesson_status");
      SCORM.debugMode = true;
      // SCORM.handleExitMode = true;
    }
  },
  getSuspendData() {
    SCORM.get("cmi.suspend_data");
  },

  setSuspendData(data) {
    SCORM.set("cmi.suspend_data", data);
    SCORM.get("cmi.suspend_data");
    SCORM.set("cmi.core.exit", "suspend");
    SCORM.data.save();
    console.log("data save");
    SCORM.save();
    console.log("save");
    // SCORM.set("cmi.exit", "suspend");
  },

  setExitStatus() {
    // SET CMI.EXIT TO SUSPEND PREVENTS DATA RESET
    SCORM.set("cmi.exit", "suspend");
    SCORM.save();
    SCORM.get("cmi.entry");
  }
};

export default Scorm;
