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
    console.log("will be sent");
    await SCORM.set("cmi.suspend_data", data);
    SCORM.set("cmi.core.lesson_status", "incomplete");
    console.log(data.length);
    console.log("is sent");
  }
};

export default Scorm;
