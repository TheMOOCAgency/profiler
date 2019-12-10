import { SCORM } from "pipwerks-scorm-api-wrapper";

let Scorm = {
  init() {
    var lmsConnected = false;

    function handleError(msg) {}

    //scorm.init returns a boolean
    lmsConnected = SCORM.init();

    //If the scorm.init function succeeded...
    if (lmsConnected) {
      SCORM.set("cmi.completion_status", "incomplete");
      SCORM.set("cmi.core.lesson_status", "incomplete");
      SCORM.set("cmi.success_status", "failed");
      SCORM.set("cmi.objectives.n.success_status", "failed");

      //Let's get the completion status to see if the course has already been completed
      var completionstatus = SCORM.get("cmi.core.score.raw");
      //If the course has already been completed...
      if (completionstatus === "completed" || completionstatus === "passed") {
        //...let's display a message and close the browser window
        handleError(
          "You have already completed this course. You do not need to continue."
        );
      }

      //If the course couldn't connect to the LMS for some reason...
    } else {
      //... let's alert the user then close the window.
      handleError("Error: Course could not connect with the LMS");
    }
  },

  getLearnerID() {
    return SCORM.get("cmi.core.student_id");
  },

  //we could also use session_time to report user time ? https://www.learnupon.com/blog/scorm-api/
  finish(score, passScore) {
    SCORM.set("cmi.core.lesson_status", "completed");
    SCORM.set("cmi.suspend_data", "data");

    var scormScore = score;
    SCORM.set("cmi.core.score.raw", scormScore);

    function began() {
      if (scormScore >= passScore) {
        SCORM.set("cmi.core.lesson_status", "passed");
        SCORM.set("cmi.core.success_status", "passed");
        // SCORM.quit();
      } else {
        //  SCORM.quit();
      }
    }
    began();
    SCORM.save();
  }
};

export default Scorm;
