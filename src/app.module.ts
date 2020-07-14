import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    // LoggerModule.forRoot({ // This doesn't work! D:
    //   pinoHttp: {
    //     prettyPrint: true,
    //     useLevelLabels: true,
    //   },
    // }),
    LoggerModule.forRoot(), // This works! :D
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
