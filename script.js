
var app = angular.module("TODOListApp", []);

app.filter('ShowTaskType',function(){
return function(dataArray , taskType){
		var Result = [];

			if(taskType == 'Remain'){
				for (var i = 0; i < dataArray.length; i++) {
				     if (dataArray[i].Status == false) {
				     	Result.push(dataArray[i]);
				     };
				    
				};
			 	return Result;
			}
			else if(taskType == 'Finished'){
				for (var i = 0; i < dataArray.length; i++) {
				     if (dataArray[i].Status == true) {
				     	Result.push(dataArray[i]);
				     };
				};
				return Result;
			}
			else
				return dataArray;
	};
});

function OrderFormController($scope){

	$scope.Tasks = [];
	$scope.taskHolder = "" ;
	$scope.ShowTypeHolder = "All";

	$scope.AddTask = function(keyEvent){
		 if (keyEvent.which === 13 && $scope.taskHolder != '' ){
			$scope.Tasks.push({Id: $scope.Tasks.length + 1 , Task:  $scope.taskHolder, Status: false });
			 $scope.taskHolder = "";
		 }
	};

	$scope.SwitchTaskStatus = function(t){
		t.Status = !t.Status;
	};

	$scope.ShowType = function(t){
		$scope.ShowTypeHolder = t;
	};

	$scope.RemoveTask = function(id){
		var index;
		for (var i = 0; i < $scope.Tasks.length; i++) {
			if($scope.Tasks[i].Id == id){
				index = i;
			}
		};
		$scope.Tasks.splice(index,1);
	}

	$scope.RemoveAll = function(){
		$scope.Tasks = [];
	}

	$scope.AllTasksCount = function(){
		return $scope.Tasks.length;
	};

	$scope.RemainTasksCount = function(){
		var count = 0 ;
		for (var i = 0; i < $scope.Tasks.length; i++) {
		    count += $scope.Tasks[i].Status == false ? 1 : 0;
		};
		return count;
	};

	$scope.FinishedTasksCount = function(){
		var count = 0 ;
		for (var i = 0; i < $scope.Tasks.length; i++) {
		    count += $scope.Tasks[i].Status != false ? 1 : 0;
		};
		return count;
	};
}