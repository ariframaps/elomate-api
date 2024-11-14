const dbPool = require('../config/database');

const getAssignmentByUser = (userId) => {
    const SQLQuery = `
    SELECT 
        a.assignment_id,
        a.course_id,
        a.title,
        a.tanggal_mulai,
        a.tanggal_selesai,
        a.category,
        a.active
    FROM 
        assignment a
    JOIN 
        course_enrollment ce ON a.course_id = ce.course_id
    WHERE 
        ce.user_user_id = ?;
    `;
    return dbPool.execute(SQLQuery, [userId]);
}

const getAssignmentByUserCourse = (userId, courseId) => {
    const SQLQuery = `
    SELECT 
        a.assignment_id,
        a.course_id,
        a.title,
        a.tanggal_mulai,
        a.tanggal_selesai,
        a.category,
        a.active
    FROM 
        assignment a
    JOIN 
        course_enrollment ce ON a.course_id = ce.course_id
    WHERE 
        ce.user_user_id = ? 
        AND a.course_id = ?;
    `;
    return dbPool.execute(SQLQuery, [userId, courseId]);
}

const getAssignmentByUserCoursePreActivity = (userId, courseId) => {
    const SQLQuery = `
    SELECT 
        a.assignment_id,
        a.course_id,
        a.title,
        a.tanggal_mulai,
        a.tanggal_selesai,
        a.category,
        a.active
    FROM 
        assignment a
    JOIN 
        course_enrollment ce ON a.course_id = ce.course_id
    WHERE 
        ce.user_user_id = ? 
        AND a.course_id = ?
        AND a.category = "Pre-Activity";
    `;
    return dbPool.execute(SQLQuery, [userId, courseId]);
}

module.exports = {
    getAssignmentByUser,
    getAssignmentByUserCourse,
    getAssignmentByUserCoursePreActivity,
}