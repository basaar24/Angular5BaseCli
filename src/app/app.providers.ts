import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { GitHubService } from "./services/git-hub.service";
import { ColorEventsService } from './services/color-events.service';

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubService,
    ColorEventsService
];
