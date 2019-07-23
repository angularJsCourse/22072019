module.controller("personCtrl",
     ($scope) => {
         $scope.person = new PersonClass({}),
         $scope.changeDate = ()=>{
            $scope.time = new  Date()
            }
                    })
