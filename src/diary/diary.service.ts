import { Injectable } from '@nestjs/common';

@Injectable()
export class DiaryService {
  private diaries: { id: string; content: string; createdAt: Date }[] = [];

  createDiary(content: string) {
    const newDiary = {
      id: Date.now().toString(),
      content,
      createdAt: new Date(),
    };
    this.diaries.push(newDiary);
    return newDiary;
  }

  getAllDiaries() {
    return this.diaries;
  }

  getDiary(id: string) {
    return this.diaries.find(diary => diary.id === id);
  }
}
