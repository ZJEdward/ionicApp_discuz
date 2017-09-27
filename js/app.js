/**
 * Created by edward on 2017/9/27.
 */


angular.module('starter', ['ionic', 'starter.controllers'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/home/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('tab.article', {
                url: '/article',
                views: {
                    'tab-article': {
                        templateUrl: 'templates/article/article.html',
                        controller: 'ArticleCtrl'
                    }
                }
            })

            .state('tab.thread', {
                url: '/thread',
                views: {
                    'tab-thread': {
                        templateUrl: 'templates/thread/thread.html',
                        controller: 'ThreadCtrl'
                    }
                }
            })

            .state('tab.user', {
                url: '/user',
                views: {
                    'tab-user': {
                        templateUrl: 'templates/user/user.html',
                        controller: 'UserCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/home');

    });