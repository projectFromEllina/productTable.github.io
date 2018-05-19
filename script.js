angular.module("listApp", [])
.controller("listCtrl", function($scope){
	$scope.items = [{name: "Rose", price: "30", id: "0"},
					{name: "Lily", price: "27", id: "1"},
					{name: "Tulip", price: "18", id: "2"}];

	$scope.tableView = "views/table.html";
	$scope.editView = "views/edit.html";
	$scope.url = $scope.tableView;

	// creating a new item
	$scope.editOrCreate = function(item){
		$scope.item = item ? angular.copy(item) : {};
		$scope.url = $scope.editView;
	}

	// saving an item
	$scope.save = function(item){
		if(angular.isDefined(item.id)){
			$scope.update(item);
		} else {
			$scope.create(item)
		}
	}

	// creating a new item with a unique id
	$scope.create = function(item) {
			if(angular.isDefined(item) &&
			angular.isDefined(item.name) &&
			angular.isDefined(item.price)){
			$scope.items.push({
				name: item.name,
				price: item.price,
				id: (new Date()).getTime()
			});
		}
		$scope.url = $scope.tableView;
	}

	// updating an item (search by unique id)
	$scope.update = function(item){
		for(var i = 0; i < $scope.items.length; i++){
			if($scope.items[i].id == item.id){
				$scope.items[i] = item;
				break;
			}
		}
		$scope.url = $scope.tableView;
	}

	// removing an item
	$scope.delete = function(item){
		$scope.items.splice(item, 1);
	}

	// 
	$scope.cancelEdit = function(){
		$scope.url = $scope.tableView;
	}

});
