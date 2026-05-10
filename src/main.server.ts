import { bootstrapApplication , BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { ChatComponent } from './app/chat/chat/chat.component';

// const bootstrap = () => bootstrapApplication(AppComponent, config);
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);


export default bootstrap;
