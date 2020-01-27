import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    let lmsConnected = SCORM.init();
    if (lmsConnected) {
      SCORM.get("cmi.entry");
      SCORM.set("cmi.completion_status", "incomplete");
      SCORM.set("cmi.success_status", "failed");
    }
  },
  getSuspendData() {
    let result = SCORM.get("cmi.suspend_data");
    return result;
  },
  async setSuspendData(data) {
    await SCORM.set("cmi.suspend_data", data);
    SCORM.set("cmi.exit", "suspend");
    SCORM.save();
  }
};

export default Scorm;
