import {AnalyticsDashboardAppConfig} from './dashboards/analytics/AnalyticsDashboardAppConfig';
import {ProjectDashboardAppConfig} from './dashboards/project/ProjectDashboardAppConfig';
import {MailAppConfig} from './mail/MailAppConfig';
import {TodoAppConfig} from './todo/TodoAppConfig';
import {ContactsAppConfig} from './contacts/ContactsAppConfig';
import {FileManagerAppConfig} from './file-manager/FileManagerAppConfig';
import {CalendarAppConfig} from './calendar/CalendarAppConfig';
import {ChatAppConfig} from "./chat/ChatAppConfig";
import {ECommerceAppConfig} from './e-commerce/ECommerceAppConfig';
import {ScrumboardAppConfig} from './scrumboard/ScrumboardAppConfig';
import {AcademyAppConfig} from './academy/AcademyAppConfig';
import {NotesAppConfig} from './notes/NotesAppConfig';
import {JobDescriptionConfig} from './hrlancer/JobDescriptionConfig';

export const appsConfigs = [
    JobDescriptionConfig,
    AnalyticsDashboardAppConfig,
    ProjectDashboardAppConfig,
    MailAppConfig,
    TodoAppConfig,
    FileManagerAppConfig,
    ContactsAppConfig,
    CalendarAppConfig,
    ChatAppConfig,
    ECommerceAppConfig,
    ScrumboardAppConfig,
    AcademyAppConfig,
    NotesAppConfig,
];
