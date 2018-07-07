const var host = process.env.BACKEND_HOST;
const var api = "http://"+host+":8000";

export const login_api = api+"/interview/user/login/";
export const question_get_api = api+"/interview/question/";
export const test_get_api = api+"/interview/test/";
export const create_user_api = api+"/interview/user/";
export const schedule_test_api = api+"/interview/schedule_test/";
export const compile_api = api+"/interview/execute/run/";
export const get_test_id_api = api+"/interview/candidate/test/";
