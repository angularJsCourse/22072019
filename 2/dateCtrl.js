module.controller("dateCtrl",
     ($scope) => {
         $scope.time = new Date(),
         $scope.changeDate = ()=>{
            $scope.time = new  Date()
            }
                    })

module.controller("reversCtrl",
     ($scope) => {
        $scope.name ='revers',
         $scope.revers = ()=>{
            $scope.name = $scope.name.split("").reverse().join("")
            }
                    })

