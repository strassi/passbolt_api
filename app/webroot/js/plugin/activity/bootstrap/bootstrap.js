steal( 
    'lb/core/model/moduleBootstrap.js'
    , 'plugin/activity/controller/activityWorkspaceController.js'
    , 'plugin/activity/controller/component/passwordActivityController.js'
)
.then( 
    function($){
        
        /*
        * @class passbolt.activity.bootstrap.Bootstrap
        * Bootstrap of the passbolt plugin activity
        * @parent index
        * @constructor
        * Init the plugin activity bootstrap
        */
        lb.core.model.BootstrapInterface.extend('passbolt.activity.bootstrap.Bootstrap', {},
        {
            'init': function()
            {
                var passwordWorkspaceSecondSideContainer = lb.app.getComponent('passbolt_password_second_side_container');
                var appWorkspacesContainer = lb.app.getComponent('app_workspaces_container');
                
                // Add the Password Information component
                passwordWorkspaceSecondSideContainer.addComponent(passbolt.activity.controller.PasswordActivityController, {
                    'id':'passbolt_activity_password_activity_controller'
                });
                
                // Add the Activity workspace component to the application
                var activityWorkspaceController = appWorkspacesContainer.addComponent(passbolt.activity.controller.ActivityWorkspaceController, {
                    'id':'activity-activityWorkspace-controller',
                    'label':'Activity'
                });
            }
        });
    }
);