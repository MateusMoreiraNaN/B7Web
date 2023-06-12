import Route from '@ioc:Adonis/Core/Route'

Route.get('/painel', 'PainelsController.index')
Route.get('/painel/usuarios', 'PainelsController.usuarios')