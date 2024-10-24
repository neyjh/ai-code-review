import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DiaryService } from './diary.service';

@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post()
  createDiary(@Body() diaryData: { content: string }) {
    return this.diaryService.createDiary(diaryData.content);
  }

  @Get()
  getAllDiaries() {
    return this.diaryService.getAllDiaries();
  }

  @Get(':id')
  getDiary(@Param('id') id: string) {
    return this.diaryService.getDiary(id);
  }
}
