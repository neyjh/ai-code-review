import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { DiaryModule } from './diary/diary.module';

@Module({
  imports: [TodoModule, DiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
