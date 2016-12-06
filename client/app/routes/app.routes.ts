import { Routes, RouterModule } from '@angular/router';

import { PollComponent } from '../components/poll/poll.component';
import { PollListComponent } from '../components/poll-list/poll-list.component';
import { LoginComponent } from '../components/login/login.component';
import { NewPollComponent } from '../components/new-poll/new-poll.component';

// Save space in the root module, export components here
export const appRoutedComponents = [
  PollComponent,
  PollListComponent,
  LoginComponent,
  NewPollComponent
];

const routes: Routes = [
  { path: '', component: PollListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'poll', component: PollComponent },
  { path: 'poll/new', component: NewPollComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutes = RouterModule.forRoot(routes);