angular.module('routerApp',['routerRoutes','ngAnimate','angular-typed'])
    .controller('mainController',function(){
        var vm = this;
    })
    .controller('homeController',function(){
        var vm = this;

    })
    .controller('workController',function(){
        var vm = this;
        vm.job = "Web Developer";
        vm.employer = "CITS";
        vm.employerLink = "http://cits.unilag.edu.ng/";
        var jobs = ["Web Developer","Cloud Engineer","System Support Engineer","Developer"];
        vm.toggle=function(){
           vm.job = jobs[Math.floor(Math.random()*jobs.length)];
            if(vm.job === "Web Developer"){
                vm.employer = "CITS";
                vm.employerLink = "http://cits.unilag.edu.ng/";
            }
           else if(vm.job === "Cloud Engineer"){
                vm.employer = "Nerve Mobile";
                vm.employerLink = "http://nervemobile.com/";
            }
           else if(vm.job === "System Support Engineer"){
                vm.employer = "NerveFlo";
                vm.employerLink = "https://nerveflo.com"

            }
            else if(vm.job === "Developer"){
                vm.employer = "6Social";
                vm.employerLink = "https://6social.media"
            }
        }

    })
    .controller('contactController',['$http','$location',
        function($http,$location){
            var vm = this;
            vm.sendButtonText = "Send";
            vm.test = 'false';

            vm.sendMail = function(path){
                vm.test = 'true';
                vm.sendButtonText = "Sending..";
                var data = ({
                    contactName:vm.contactName,
                    contactEmail:vm.contactEmail,
                    contactEmailSubject:vm.contactEmailSubject,
                    contactMsg:vm.contactMsg
                });
                $http.post('/contact-form',data)
                    .error(function(){
                        console.log("error ya bish")
                    })
                    .success(function(){
                        $location.path(path);
                    })
            };
        }])
    .controller('thanksController',function(){

   });

