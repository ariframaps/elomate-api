const CoursesModel = require("../models/courses");

const getCoursesByUser = async (req, res) => {
  try {
      const userId = req.user.userId; // Ensure userId is extracted via middleware authentication
      
      // Fetch courses based on user ID
      const [courses] = await CoursesModel.getCoursesByUserId(userId);
      
      if (!courses || courses.length === 0) {
          return res.status(404).json({
              message: "No courses found for this user",
              data: null,
          });
      }

      // Return all courses related to the user
      // return res.status(200).json({ courses });

      // Return the array directly without wrapping in an object
      return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({
          message: "Internal server error",
          serverMessage: error.message,
      });
  }
};

const getCoursesProgressByUser = async (req, res) => {
  try {
      const userId = req.user.userId; // Ensure userId is extracted via middleware authentication
      
      // Fetch courses based on user ID
      const [courses] = await CoursesModel.getCoursesProgressByUser(userId);
      
      if (!courses || courses.length === 0) {
          return res.status(404).json({
              message: "No courses found for this user",
              data: null,
          });
      }

      // Return all courses related to the user
      // return res.status(200).json({ courses });

      // Return the array directly without wrapping in an object
      return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({
          message: "Internal server error",
          serverMessage: error.message,
      });
  }
};

const getCoursesByUserIdAndPhaseAndTopic = async (req, res) => {
  
  const { phase, topic } = req.params;

  // Check if phase or topic is missing
  if (!phase || !topic) {
      return res.status(400).json({
          message: "Phase and topic are required parameters",
          data: null,
      });
  }

  try {
      const userId = req.user.userId; // Ensure userId is extracted via middleware authentication
      
      // Fetch courses based on user ID
      const [courses] = await CoursesModel.getCoursesByUserIdAndPhaseAndTopic(userId, phase, topic);
      
      if (!courses || courses.length === 0) {
          return res.status(404).json({
              message: "No courses found for this user",
              data: null,
          });
      }

      // Return all courses related to the user
      // return res.status(200).json({ courses });

      // Return the array directly without wrapping in an object
      return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({
          message: "Internal server error",
          serverMessage: error.message,
      });
  }
};

const getCoursesByUserIdCourseId = async (req, res) => {
  
  const { courseId } = req.params;

  // Check if phase or topic is missing
  if (!courseId) {
      return res.status(400).json({
          message: "Phase and topic are required parameters",
          data: null,
      });
  }

  try {
      const userId = req.user.userId; // Ensure userId is extracted via middleware authentication
      
      // Fetch courses based on user ID
      const [courses] = await CoursesModel.getCoursesByUserIdCourseId(userId, courseId);
      
      if (!courses || courses.length === 0) {
          return res.status(404).json({
              message: "No courses found for this user",
              data: null,
          });
      }

      // Return all courses related to the user
      // return res.status(200).json({ courses });

      // Return the array directly without wrapping in an object
      return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({
          message: "Internal server error",
          serverMessage: error.message,
      });
  }
};


const getCoursesByUserIdAndPhaseNameAndTopicName = async (req, res) => {
  const { phaseName, topicName } = req.body;

  // Check if phase or topic is missing in request body
  if (!phaseName || !topicName) {
      return res.status(400).json({
          message: "Phase and topic are required in the request body",
          data: null,
      });
  }

  try {
      const userId = req.user.userId; // Ensure userId is extracted via middleware authentication
      
      // Fetch courses based on user ID, phaseName, and topicName
      const [courses] = await CoursesModel.getCoursesByUserIdAndPhaseNameAndTopicName(userId, phaseName, topicName);
      
      if (!courses || courses.length === 0) {
          return res.status(404).json({
              message: "No courses found for this user",
              data: null,
          });
      }

      // Return the array of courses directly without wrapping in an object
      return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({
          message: "Internal server error",
          serverMessage: error.message,
      });
  }
};


const getPhaseCourses = async (req, res) => {
    try {
      const [data] = await CoursesModel.getPhaseCourses();
  
    //   res.json({
    //     message: "GET all users success",
    //     data: data,
    //   });
      res.json(data);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
};

const getPhaseCoursesByUserId = async (req, res) => {
  try {
      const userId = req.user.userId; // Ensure userId is extracted via middleware authentication
      
      // Fetch courses based on user ID
      const [courses] = await CoursesModel.getPhaseCoursesByUserId(userId);
      
      if (!courses || courses.length === 0) {
          return res.status(404).json({
              message: "No phase found for this user",
              data: null,
          });
      }

      // // Remove duplicates based on phase_id
      // const uniqueCourses = courses.filter(
      //     (course, index, self) => index === self.findIndex(c => c.phase_id === course.phase_id)
      // );

      // Return the array directly without wrapping in an object
      return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({
          message: "Internal server error",
          serverMessage: error.message,
      });
  }
};

const getTopicByPhase = async (req, res) => {
    const { phaseCourse } = req.params;
    try {
      const [data] = await CoursesModel.getTopicByPhase(phaseCourse);

      if (data.length === 0) {
        return res.status(404).json({
          message: "Topic not found",
          data: null,
        });
      }

      res.json(data);

    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
};

const getTopicByPhaseUserId = async (req, res) => {
  const { phaseCourse } = req.params;
  try {
    const userId = req.user.userId;
    const [data] = await CoursesModel.getTopicByPhaseUserId(userId, phaseCourse);

    if (data.length === 0) {
      return res.status(404).json({
        message: "Topic not found",
        data: null,
      });
    }

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const TopicByPhaseUserId = async (req, res) => {
  const { phaseCourse } = req.body;
  try {
    const userId = req.user.userId;
    const [data] = await CoursesModel.TopicByPhaseUserId(userId, phaseCourse);

    if (data.length === 0) {
      return res.status(404).json({
        message: "Topic not found",
        data: null,
      });
    }

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};


module.exports = {
    getCoursesByUser,
    getCoursesProgressByUser,
    getCoursesByUserIdAndPhaseAndTopic,
    getCoursesByUserIdAndPhaseNameAndTopicName,
    getCoursesByUserIdCourseId,
    getPhaseCourses,
    getPhaseCoursesByUserId,
    getTopicByPhase,
    getTopicByPhaseUserId,
    TopicByPhaseUserId,
};
