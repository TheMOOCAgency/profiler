import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    let lmsConnected = SCORM.init();

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

  async setSuspendData(data) {
    await SCORM.set("cmi.suspend_data", data);
  }
};

export default Scorm;
