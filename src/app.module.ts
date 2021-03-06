import { Module } from '@nestjs/common';
import {TypeOrmModule} from   '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";
import {TaskModule} from "./task/task.module";
import {CategoryModule} from "./category/category.module";


@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }),AuthModule,UserModule,TaskModule,CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


