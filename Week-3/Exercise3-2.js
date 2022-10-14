/*Bind, call, apply function*/
var studentDetail = {
    Name: 'Karishma',
    Age: 25,
    getStudentDetail: function () {
        var fullDetail = this.Name + ' ' + 'Age is' + ' ' + this.Age;
        return fullDetail;
    }
};
var bindStudentName = function (functionDetail) {
    console.log(this.getStudentDetail() + ' ' + functionDetail);
};
var studentName = function (gender, nationality, functionDetail) {
    console.log(this.getStudentDetail() + ' ' + 'Gender -' + ' ' + gender + ' ' + 'Nationality -' + ' ' + nationality + ' ' + functionDetail);
};

var bindFn = bindStudentName.bind(studentDetail,'/*****calling bind function*******/');
bindFn();
studentName.call(studentDetail, 'Female', 'Indian', '/******Calling call function*****/');
studentName.apply(studentDetail, ['Female', 'Indian', '/******Calling apply function*****/']);