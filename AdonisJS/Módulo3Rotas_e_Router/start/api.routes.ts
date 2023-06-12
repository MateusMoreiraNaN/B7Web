import Route from '@ioc:Adonis/Core/Route'

Route.group
(()=>{
    Route.get('/admin/', 'PainelsController.admin')
    
    Route.group(()=>{
        Route.get('/', 'PainelsController.index')
        Route.get('/usuarios', 'PainelsController.usuarios')
        Route.get('/password', 'PainelsController.passwords')
    }).prefix('/painel/')

}).prefix('/api')