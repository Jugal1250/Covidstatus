const URL = 'https://covid.mathdro.id/api';


let app = angular.module("myApp",[]);

app.controller('myCtrl', ($scope , $http)=>{
    $scope.title="Stay Home Stay Safe";

    $http.get(URL).then( (response)=>{
        console.log(response.data);
        $scope.all_data = response.data;
    },(error)=>{
        console.log(error);
    });
    $scope.get_c_data = () => {
        let country = $scope.c;
       if(country == " "){
            $scope.c_data=undefined;
           return;
       }        
       $http.get(`${URL}/countries/${country}`)
       .then((response)=>{
           console.log(response.data);
           $scope.c_data = response.data;
       },(error)=>{
           console.log(error);
       })
    };   
});