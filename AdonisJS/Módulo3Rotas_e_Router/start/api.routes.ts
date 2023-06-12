import Route from '@ioc:Adonis/Core/Route'

Route.group
(()=>{
    Route.get('/admin/', 'PainelsController.admin')
    
    Route.group(()=>{
        Route.get('/', 'PainelsController.index')
        Route.get('/usuarios', 'PainelsController.usuarios')
        Route.get('/password', 'PainelsController.passwords')
        Route.get('/usuarios/:id', 'PainelsController.usuario')
    }).prefix('/painel/')


}).prefix('/api')