// Merchant Registration

var regResponse="{'status':'200','userId':'1'}";
var res=eval("("+regResponse+")");

var app=angular.module("reg",[]);

app.controller("regCtrl",function($scope){
	$scope.registration=function(){
		$scope.validName=false;
		$scope.validMobileNumber=false;
		$scope.validEmail=false;
		$scope.validPassword=false;
		$scope.validConfirmPassword=false;
		
		if(emptyCheck($scope.mName)){$scope.validName=regNameEmpty;return};
		
		if(emptyCheck($scope.mMobile)){$scope.validMobileNumber=mobileNmuberEmpty;return};
		if(!mobileNumberRegex.test($scope.mMobile)){$scope.validMobileNumber=invalidMobileNumber;return};
		
		if(emptyCheck($scope.mEmail)){$scope.validEmail=emailEmpty;return};
		if(!emailRegex.test($scope.mEmail)){$scope.validEmail=invalidEmailId;return};
		
		if(emptyCheck($scope.mPassword)){$scope.validPassword=passwordEmpty;return};
		if(!passwordRegex.test($scope.mPassword)){$scope.validPassword=passwordStrength;return};		
		
		if(emptyCheck($scope.mConfirmPassword)){$scope.validConfirmPassword=passwordEmpty;return};		
		
		if($scope.mPassword!=$scope.mConfirmPassword){$scope.validConfirmPassword=matchPassword;return};	
		
		if(res.status=="200"){
			window.location.href = "SuccessfulRegistration.html";
		}
	}
});

function emptyCheck(str){
	if(str=="" || str=="undefined" || str==undefined || str==null || str=="null")return true;
	else return false;
}
