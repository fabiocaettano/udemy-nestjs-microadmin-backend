import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoriaSchema } from './interfaces/categorias/categoria.schema'
import { JogadorSchema } from './interfaces/jogadores/jogador.schema'


require('dotenv').config()

console.log(process.env.DB_URI)

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI,{useNewUrlParser: true}),    
    MongooseModule.forFeature([
      {name:'Categoria', schema: CategoriaSchema},
      {name:'Jogador', schema: JogadorSchema}
    ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
