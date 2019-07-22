module.controller("personCtrl",
     ($scope) => {
         $scope.person = new PersonClass(),
         $scope.name1 = '';
         $scope.age ='';
         $scope.bike =''; 
         $scope.password = '';
         $scope.car1 = '';
         alert("a")
         $scope.changeDate = ()=>{
            $scope.time = new  Date()
            }
                    })
